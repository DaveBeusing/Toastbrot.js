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
export default class Toastbrot {
	constructor(){
		const styles = `
			.toastbrot {
				display: block;
				position: absolute;
				right: 15px;
				bottom: 15px;
			}
			.toastbrot .tb-notification {
				width: 290px;
				height: 90px;
				padding: 10px;
				border: 1px solid black;
				border-radius: 5px;
				background-color: rgba( 0, 0, 0, 0.5);
				color: #ffffff;
				margin-top: 5px;
				
				transform-origin: right;
				animation: tb-fade-in 3s ease-in-out forwards;
			}
			@keyframes tb-fade-in {
				from {
					visibility: hidden;
					opacity: 0;
				}
				to {
					visibility: visible;
					opacity: 1;
				}
			}
			@keyframes tb-notify {
				0% {transform: scaleX(0);}
				10% {transform: scaleX(1);}
				13% {transform: scale(1.1);}
				16% {transform: scale(1);}
				55% {transform: scaleX(1); border-radius: 0%;}
			}
			.toastbrot .tb-close {
				position: absolute;
				top: 0;
				right: 0;
				padding: 5px;
			}
			.toastbrot .tb-close:hover{
				color: white;
				cursor: pointer;
			}
		`;
		this.css( styles );
		const wrapper = this.node();
			wrapper.className = 'toastbrot';
		document.body.appendChild( wrapper );
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
	create( msg, autoclose = 0 ){
		const notification = this.node();
			notification.className = 'tb-notification';
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
			notification.remove();
		}, false );
		if( autoclose > 0 ){
			let seconds = 0;
			let interval = setInterval( function(){
				seconds++;
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