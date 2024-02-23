/**
 * Copyright (c) 2024 Dave Beusing <david.beusing@gmail.com>
 *
 * MIT License - https://opensource.org/license/mit/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
import {styles} from './tb-styles.js'

export default class Toastbrot {
	constructor(){
		this.animations = {
			'tb-bounce': {
				in : 'tb-bounce-in-up',
				out : 'tb-bounce-out-down'
			},
		};
		this.css( styles );
		this.wrapper = this.node();
			this.wrapper.className = 'toastbrot';
		document.body.appendChild( this.wrapper );
	}
	$( element ){
		return document.querySelector( element );
	}
	node( element = 'div' ){
		return document.createElement( element );
	}
	parent( element ){
		return element.parentElement || element.parentNode;
	}
	css( styles ){
		const style = this.node( 'style' );
		style.textContent = styles;
		document.head.append( style );
	}
	create( options ){
		options = options || {};
		let msg = options.msg || '';
		let autoclose = options.autoclose || 0;
		let position = options.position || 'tb-bottom-right';
		let animation = options.animation || 'tb-bounce';

		this.wrapper.classList.toggle( position );

		const notification = this.node();
			notification.className = 'tb-notification';
			notification.classList.toggle( this.animations[animation].in );// 'tb-bounce-in-up' 
		const close_button = this.node();
			close_button.className = 'tb-close';
			close_button.innerHTML = '\u2715';
		const message = this.node();
			message.className = 'tb-message';
			message.innerHTML = msg;
		notification.appendChild( close_button );
		notification.appendChild( message );
		this.$( '.toastbrot' ).appendChild( notification );
		close_button.addEventListener( 'click', function( event ){
			notification.classList.toggle( 'tb-bounce-out-down' );
			setTimeout( function(){
				notification.remove();
			}, ( 1 * 1000 ) );
		}, false );
		if( autoclose > 0 ){
			autoclose += 1; //FIX: add a second for animation
			let seconds = 0;
			let interval = setInterval( function(){
				seconds++;
				if( seconds === ( autoclose -1 ) ){
					notification.classList.toggle( this.animations[animation].out );//'tb-bounce-out-down'
				}
				if( seconds === autoclose ){
					notification.remove();
				}
			}.bind( this ), 1000);
			setTimeout( function(){
				clearInterval( interval );
			}, ( autoclose * 1000 ) );
		}
	}
}