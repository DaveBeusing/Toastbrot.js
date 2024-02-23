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

export const styles = `

.toastbrot {
	display: block;
	position: absolute;
}

.tb-bottom-right {
	right: 20px;
	bottom: 20px;
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
	animation-duration: 1s;
	animation-fill-mode: both;
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

.toastbrot .tb-bounce-in-up {
	animation-name: tb-bounce-in-up;
}

.toastbrot .tb-bounce-out-down {
	animation-name: tb-bounce-out-down;
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

@keyframes tb-bounce-in-up {
	from, 60%, 75%, 90%,
	to {
		animation-timing-function: cubic-bezier( 0.215, 0.61, 0.355, 1 );
	}
	from {
		opacity: 0;
		transform: translate3d( 0, 3000px, 0 ) scaleY( 5 );
	}
	60% {
		opacity: 1;
		transform: translate3d( 0, -20px, 0 ) scaleY( 0.9 );
	}
	75% {
		transform: translate3d( 0, 10px, 0 ) scaleY( 0.95 );
	}
	90% {
		transform: translate3d( 0, -5px, 0 ) scaleY( 0.985 );
	}
	to {
		transform: translate3d( 0, 0, 0 );
	}
}

@keyframes tb-bounce-out-down {
	20% {
		transform: translate3d( 0, 10px, 0 ) scaleY( 0.985 );
	}
	40%, 45% {
		opacity: 1;
		transform: translate3d( 0, -20px, 0 ) scaleY( 0.9 );
	}
	to {
		opacity: 0;
		transform: translate3d( 0, 2000px, 0 ) scaleY( 3 );
	}
}









`;