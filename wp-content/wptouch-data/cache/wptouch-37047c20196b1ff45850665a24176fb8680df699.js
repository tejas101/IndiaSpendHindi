//fgnass.github.com/spin.js#v1.2.7
!function(e,t,n){function o(e,n){var r=t.createElement(e||"div"),i;for(i in n)r[i]=n[i];return r}function u(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function f(e,t,n,r){var o=["opacity",t,~~(e*100),n,r].join("-"),u=.01+n/r*100,f=Math.max(1-(1-e)/t*(100-u),e),l=s.substring(0,s.indexOf("Animation")).toLowerCase(),c=l&&"-"+l+"-"||"";return i[o]||(a.insertRule("@"+c+"keyframes "+o+"{"+"0%{opacity:"+f+"}"+u+"%{opacity:"+e+"}"+(u+.01)+"%{opacity:1}"+(u+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+f+"}"+"}",a.cssRules.length),i[o]=1),o}function l(e,t){var i=e.style,s,o;if(i[t]!==n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(o=0;o<r.length;o++){s=r[o]+t;if(i[s]!==n)return s}}function c(e,t){for(var n in t)e.style[l(e,n)||n]=t[n];return e}function h(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]===n&&(e[i]=r[i])}return e}function p(e){var t={x:e.offsetLeft,y:e.offsetTop};while(e=e.offsetParent)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}var r=["webkit","Moz","ms","O"],i={},s,a=function(){var e=o("style",{type:"text/css"});return u(t.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},v=function m(e){if(!this.spin)return new m(e);this.opts=h(e||{},m.defaults,d)};v.defaults={},h(v.prototype,{spin:function(e){this.stop();var t=this,n=t.opts,r=t.el=c(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),i=n.radius+n.length+n.width,u,a;e&&(e.insertBefore(r,e.firstChild||null),a=p(e),u=p(r),c(r,{left:(n.left=="auto"?a.x-u.x+(e.offsetWidth>>1):parseInt(n.left,10)+i)+"px",top:(n.top=="auto"?a.y-u.y+(e.offsetHeight>>1):parseInt(n.top,10)+i)+"px"})),r.setAttribute("aria-role","progressbar"),t.lines(r,t.opts);if(!s){var f=0,l=n.fps,h=l/n.speed,d=(1-n.opacity)/(h*n.trail/100),v=h/n.lines;(function m(){f++;for(var e=n.lines;e;e--){var i=Math.max(1-(f+e*v)%h*d,n.opacity);t.opacity(r,n.lines-e,i,n)}t.timeout=t.el&&setTimeout(m,~~(1e3/l))})()}return t},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=n),this},lines:function(e,t){function i(e,r){return c(o(),{position:"absolute",width:t.length+t.width+"px",height:t.width+"px",background:e,boxShadow:r,transformOrigin:"left",transform:"rotate("+~~(360/t.lines*n+t.rotate)+"deg) translate("+t.radius+"px"+",0)",borderRadius:(t.corners*t.width>>1)+"px"})}var n=0,r;for(;n<t.lines;n++)r=c(o(),{position:"absolute",top:1+~(t.width/2)+"px",transform:t.hwaccel?"translate3d(0,0,0)":"",opacity:t.opacity,animation:s&&f(t.opacity,t.trail,n,t.lines)+" "+1/t.speed+"s linear infinite"}),t.shadow&&u(r,c(i("#000","0 0 4px #000"),{top:"2px"})),u(e,u(r,i(t.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),function(){function e(e,t){return o("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',t)}var t=c(o("group"),{behavior:"url(#default#VML)"});!l(t,"transform")&&t.adj?(a.addRule(".spin-vml","behavior:url(#default#VML)"),v.prototype.lines=function(t,n){function s(){return c(e("group",{coordsize:i+" "+i,coordorigin:-r+" "+ -r}),{width:i,height:i})}function l(t,i,o){u(a,u(c(s(),{rotation:360/n.lines*t+"deg",left:~~i}),u(c(e("roundrect",{arcsize:n.corners}),{width:r,height:n.width,left:n.radius,top:-n.width>>1,filter:o}),e("fill",{color:n.color,opacity:n.opacity}),e("stroke",{opacity:0}))))}var r=n.length+n.width,i=2*r,o=-(n.width+n.length)*2+"px",a=c(s(),{position:"absolute",top:o,left:o}),f;if(n.shadow)for(f=1;f<=n.lines;f++)l(f,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(f=1;f<=n.lines;f++)l(f);return u(t,a)},v.prototype.opacity=function(e,t,n,r){var i=e.firstChild;r=r.shadow&&r.lines||0,i&&t+r<i.childNodes.length&&(i=i.childNodes[t+r],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}):s=l(t,"animation")}(),typeof define=="function"&&define.amd?define(function(){return v}):e.Spinner=v}(window,document);
/*

You can now create a spinner using any of the variants below:

$("#el").spin(); // Produces default Spinner using the text color of #el.
$("#el").spin("small"); // Produces a 'small' Spinner using the text color of #el.
$("#el").spin("large", "white"); // Produces a 'large' Spinner in white (or any valid CSS color).
$("#el").spin({ ... }); // Produces a Spinner using your custom settings.

$("#el").spin(false); // Kills the spinner.

*/
(function($) {
	$.fn.spin = function(opts, color) {
		var presets = {
			"tiny": { lines: 8, length: 2, width: 2, radius: 3 },
			"small": { lines: 8, length: 4, width: 3, radius: 5 },
			"large": { lines: 10, length: 8, width: 4, radius: 8 }
		};
		if (Spinner) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data();
				
				if (data.spinner) {
					data.spinner.stop();
					delete data.spinner;
				}
				if (opts !== false) {
					if (typeof opts === "string") {
						if (opts in presets) {
							opts = presets[opts];
						} else {
							opts = {};
						}
						if (color) {
							opts.color = color;
						}
					}
					data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
				}
			});
		} else {
			throw "Spinner class not available.";
		}
	};
})(jQuery);

function wptouchFdnSetupMenu( menuContainer ) {

	menuContainer = jQuery( menuContainer );

	menuContainer.find( 'li.menu-item ul' ).each( function() {
		if ( !jQuery( this ).children().length > 0 ) {
			jQuery( this ).remove();
		}
	});

	menuContainer.find( 'li.menu-item' ).has( 'ul' ).addClass( 'has_children' ).prepend( '<span></span>' );

	jQuery( 'ul li.has_children span', menuContainer ).on( 'click', function( e ) {
		jQuery( this ).toggleClass( 'toggle' ).parent().toggleClass( 'open-tree' );
		jQuery( this ).parent().find( 'ul' ).first().webkitSlideToggle();
		e.preventDefault();
		e.stopPropagation();
	});

	//If parent links are turned off
	var noParentLinks = jQuery( 'ul.no-parent-links' );
	if ( jQuery( noParentLinks ).length ) {

		menuContainer.each( function(){
			jQuery( noParentLinks, this ).off().on( 'click', 'li.has_children > a', function( e ){
				jQuery( this ).parent().find( 'span' ).trigger( 'click' );
				e.preventDefault();
				e.stopPropagation();
			});
		});
	}
}

// Setup show/hide menus
function wptouchFdnSetupAllMenus() {
	jQuery( '.show-hide-menu, .slide-menu' ).each( function() {
		var menuId = jQuery( this ).prop( 'id' );
		if ( menuId ) {
			wptouchFdnSetupMenu( '#' + menuId );
		}
	});
}

function wptouchDoFdnMenuReady() {
	wptouchFdnSetupAllMenus();
}

jQuery( document ).ready( function() { wptouchDoFdnMenuReady(); } );
/* WPtouch Pro Foundation Base JS */
/* Description: This file holds all the default jQuery & Ajax functions for the Foundation parent theme on mobile & tablets, used by all child themes */

// Try to get out of frames!
function wptouchFdnEscFrames() {
	if ( window.top != window.self ) {
		window.top.location = self.location.href
	}
}

function wptouchFdnIfFixed() {
	if ( wptouchFdnHasFixedPos() ) {
		jQuery( 'body' ).addClass( 'has-fixed' );
	}
}

function wptouchFdnBindBackButtons( buttonElement ) {
	if ( typeof( buttonElement ) === 'undefined' ) buttonElement = '.back-button';
	jQuery( buttonElement ).on( 'click', function( e ) {
		history.back();
		e.preventDefault();
	});
}

function wptouchFdnBindFwdButtons( buttonElement ) {
	if ( typeof( buttonElement ) === 'undefined' ) buttonElement = '.fwd-button';
	jQuery( buttonElement ).on( 'click', function( e ) {
		history.forward();
		e.preventDefault();
	});
}

// Try to make smaller elements nicer in posts
function wptouchFdnCenterImages( elements, imgWidth ) {
	jQuery( elements ).each( function() {
		if ( !jQuery( this ).hasClass( 'aligncenter' ) && jQuery( this ).width() > imgWidth ) {
			jQuery( this ).not('.post-thumbnail').addClass( 'aligncenter' );
		}
	});
}

function wptouchFdnSetupSlideToggles() {
	jQuery( '.slide-toggle' ).each( function() {
		var targetId = jQuery( this ).attr( 'data-effect-target' );
		wptouchFdnSlideToggle( this, '#' + targetId, 500 );
	});
}

/* Detect screen sizes and other device details and add or remove corresponding 'smartphone' or 'tablet' classes
	Using document.body.clientWidth because it's faster (and it's what jQuery uses under the hood, anyways) */
function wptouchFdnUpdateDevice() {
	var bodyEl = jQuery( 'body' );
	// Update the body class if the device width is equal to or bigger than 768px
	if ( document.body.clientWidth < 768 && !bodyEl.hasClass( 'smartphone' ) ) {
		bodyEl.addClass( 'smartphone' ).removeClass( 'tablet' );
		// Create a cookie for the device class so we can reference it via PHP afterwards if needed
		wptouchCreateCookie( 'wptouch-device-type', 'smartphone', 365 );
	} else if ( document.body.clientWidth >= 768 && !bodyEl.hasClass( 'tablet' ) ) {
		bodyEl.addClass( 'tablet' ).removeClass( 'smartphone' );
		// Create a cookie for the device class so we can reference it via PHP afterwards if needed
		wptouchCreateCookie( 'wptouch-device-type', 'tablet', 365 );
	}
}

function wptouchFdnUpdateOrientation() {
	var bodyEl = jQuery( 'body' );
// Update scroll position slightly to fix fixed elements
//	var scrollPosition = bodyEl.scrollTop() + 1;
//	window.scrollTo( 0, scrollPosition, 100 );

	// If it's a smartphone & the clientWidth is less than 480, assume it's portrait, else landscape (works for iPhone 5, as well )
	if ( bodyEl.hasClass( 'smartphone' ) ) {
		if ( document.body.clientWidth < 480 ) {
			bodyEl.addClass( 'portrait' ).removeClass( 'landscape' );
			wptouchCreateCookie( 'wptouch-device-orientation', 'portrait', 365 );
	} else {
			bodyEl.addClass( 'landscape' ).removeClass( 'portrait' );
			wptouchCreateCookie( 'wptouch-device-orientation', 'landscape', 365 );
		}
	}

	// If it's a tablet & the clientWidth is less than 1024, assume it's portrait, else landscape
	if ( bodyEl.hasClass( 'tablet' ) ) {
		if ( document.body.clientWidth < 1024 ) {
			bodyEl.addClass( 'portrait' ).removeClass( 'landscape' );
			wptouchCreateCookie( 'wptouch-device-orientation', 'portrait', 365 );
		} else {
			bodyEl.addClass( 'landscape' ).removeClass( 'portrait' );
			wptouchCreateCookie( 'wptouch-device-orientation', 'landscape', 365 );
		}
	}
}

function wptouchFdnDoDeviceAndOrientationListener() {
	jQuery( window ).resize( function() {
		wptouchFdnUpdateDevice();
		wptouchFdnUpdateOrientation();
	}).resize();
}

// Back to top links in themes
function wptouchFdnSetupBackToTopLinks() {
	jQuery( '.back-to-top' ).each( function() {
		jQuery( this ).on( 'click', function( e ){
		    jQuery( 'body' ).animate( { scrollTop: jQuery( 'html' ).offset().top }, 550 );
			e.preventDefault();
		});
	});
}

function wptouchFdnSetupShowHideToggles() {
	jQuery( '.show-hide-toggle' ).each( function() {
		var targetId = jQuery( this ).attr( 'data-effect-target' );
		var closeId = jQuery( this ).attr( 'data-effect-close' );
		var linkId = jQuery( this ).prop( 'id' );

		jQuery( this ).on( 'click', function( e ) {
			if ( typeof( closeId ) !== 'undefined' ) {
				var originalId = jQuery( '#' + closeId ).attr( 'data-source-click' );
				if ( typeof( originalId ) !== 'undefined' ) {
					jQuery( '#' + originalId ).removeClass( 'toggle-open' );
					jQuery( '#' + closeId ).data( 'data-source-click', '' );
				}

				jQuery( '#' + closeId ).hide();
			}

			jQuery( this ).toggleClass( 'toggle-open' );
			jQuery( '#' + targetId ).attr( 'data-source-click', linkId ).webkitSlideToggle();

			e.preventDefault();
		});
	});
}

function wptouchFdnCheckHideAddressBar() {
	if ( jQuery( 'body' ).hasClass( 'hide-address-bar' ) ) {
		window.scrollTo( 0,1 );
	}
}

function wptouchFdnPreviewReload() {
	jQuery( '#preview-bar' ).find( '.refresher' ).on( 'click', function() {
		setTimeout( window.location.reload.bind( window.location ), 0 );
	});
}

function wptouchFdnSwitchToggle() {
	jQuery( '#switch' ).on( 'click', '.off', function() {
		jQuery( '.on' ).removeClass( 'active' );
		jQuery( this ).addClass( 'active' );
	});
}

function wptouchFdnHandleShortcode() {
	if ( !navigator.standalone ) {
		jQuery( '.wptouch-shortcode-mobile-only' ).show();
	}
}

function wptouchFdnSetupjQuery() {

	// jQuery function opacityToggle()
	jQuery.fn.opacityToggle = function( speed, easing, callback ) {
		return this.animate( { opacity: 'toggle' }, speed, easing, callback );
   	}

  	// jQuery function webkitSlideToggle()
	jQuery.fn.webkitSlideToggle = function() {
		if ( wptouchFdnIsiOS6() ) {
			if ( !this.hasClass( 'slide-in' ) ) {
				this.removeClass( 'slide-out' ).addClass( 'slide-in' ).show();
			} else {
				this.removeClass( 'slide-in' ).addClass( 'slide-out' );
				setTimeout( function(){ jQuery( '.slide-out' ).hide(); }, 480 );
			}
		} else {
			this.toggle();
		}
  	}

	// jQuery function viewportCenter()
	jQuery.fn.viewportCenter = function() {
	    this.css( 'position', 'absolute' );
	    this.css( 'top', ( ( jQuery( window ).height() - this.outerHeight() ) / 3 ) + jQuery( window ).scrollTop() + 'px' );
	    this.css( 'left', ( ( jQuery( window ).width() - this.outerWidth() ) / 2 ) + jQuery( window ).scrollLeft() + 'px' );
	    return this;
	}

	// Set the form element tabindex automagically
	jQuery( function() {
		var tabindex = 1;
		jQuery( 'input, select, textarea' ).each( function() {
			if ( this.type != "hidden" ) {
				var inputToTab = jQuery( this );
				inputToTab.attr( 'tabindex', tabindex );
				tabindex++;
			}
		});
	});
}

function wptouchFdnSetupWPML() {
	var wpmlLanguageSwitch = jQuery( '#wpml-language-chooser select' );
	if ( wpmlLanguageSwitch.length ) {
		wpmlLanguageSwitch.change( function() {
			var switchLink = wpmlLanguageSwitch.val();
			document.location.href = switchLink;
		});
	}
}

function wptouchFdnBaseReady() {
	wptouchFdnEscFrames();
	wptouchFdnIfFixed();
	wptouchFdnBindBackButtons();
	wptouchFdnBindFwdButtons();
	wptouchFdnCenterImages( '.post img, .wp-caption', 105 );
	wptouchFdnSetupSlideToggles();
	wptouchFdnDoDeviceAndOrientationListener();
	wptouchFdnSetupBackToTopLinks();
	wptouchFdnSetupShowHideToggles();
	wptouchFdnCheckHideAddressBar();
	wptouchFdnPreviewReload();
	wptouchFdnSwitchToggle();
	wptouchFdnHandleShortcode();
	wptouchFdnSetupjQuery();
	wptouchFdnSetupWPML();
}

jQuery( document ).ready( function() { wptouchFdnBaseReady(); } );
/* WPtouch Pro Public Foundation JavaScript Functions */
/* Description: These functions can be used in themes as needed */

function wptouchFdnIsiOS6() {
	return ( '-webkit-filter' in document.body.style );
}

function wptouchFdnHasFixedPos() {
	if ( jQuery( 'body' ).hasClass( 'preview-mode' ) ) {
		return true;
	} else {
		return '-webkit-overflow-scrolling' in document.body.style;
	}
}

// Function for fade-toggling hidden elements
function wptouchFdnShowHideToggle( linkTrigger, hiddenElement ) {
	jQuery( linkTrigger ).on( 'click', function( e ) {
		jQuery( linkTrigger ).toggleClass( 'toggle-open' );
		jQuery( hiddenElement ).opacityToggle( 380 );
		e.preventDefault();
	});
}

// Function for slide-toggling hidden elements
function wptouchFdnSlideToggle( linkTrigger, hiddenElement, speed ) {
	jQuery( linkTrigger ).on( 'click', function( e ) {
		jQuery( linkTrigger ).toggleClass( 'toggle-open' );
		jQuery( hiddenElement ).slideToggle( speed );

		e.preventDefault();
	});
}

// Create a cookie
function wptouchCreateCookie( name, value, days ) {
	if ( days ) {
		var date = new Date();
		date.setTime( date.getTime() + ( days*24*60*60*1000 ) );
		var expires = '; expires='+date.toGMTString();
	}
	else var expires = '';
	document.cookie = name+'='+value+expires+'; path='+wptouchMain.siteurl;
}

// Read a cookie
function wptouchReadCookie( name ) {
	var nameEQ = name + "=";
	var ca = document.cookie.split( ';' );
	for( var i=0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt( 0 )==' ' ) c = c.substring( 1, c.length );
		if ( c.indexOf( nameEQ ) == 0 ) return c.substring( nameEQ.length, c.length );
	}
	return null;
}

// Erase a cookie
function wptouchEraseCookie( name ) {
	wptouchCreateCookie( name, '', -1 );
}

// List all cookies (useful in alerts for testing)
function wptouchListCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}
function wptouchDoPreview() {
	jQuery( 'a' ).each( function() {
		var linkLocation = jQuery( this ).attr( 'href' );
		if ( linkLocation ) {
			if ( linkLocation.search( "\\?" ) == -1 ) {
				linkLocation = linkLocation + '?wptouch_preview_theme=enabled';
			} else {
				linkLocation = linkLocation + '&wptouch_preview_theme=enabled';
			}
			jQuery( this ).attr( 'href', linkLocation );
		}
	});
}

jQuery( document ).ready( function() { wptouchDoPreview(); });
/* WPtouch Foundation Google Fonts Code */

var googleBodyEls = ( 'form *' );
var googleHeadingEls = ( 'h1, h2, h3, h4, h5, h6' );

function addGoogleFontClasses() {
	jQuery( googleBodyEls ).addClass( 'body-font' );
	jQuery( googleHeadingEls ).addClass( 'heading-font' );
}

jQuery( document ).ready( function() { addGoogleFontClasses(); });
jQuery( document ).ajaxComplete( function() { addGoogleFontClasses(); });
function doFoundationLoadMoreReady() {
	var loadMoreLink = 'a.load-more-link';
	jQuery( '#content' ).on( 'click', loadMoreLink, function( e ) {
		jQuery( loadMoreLink ).addClass( 'ajaxing' ).text( wptouchFdn.ajaxLoading ).prepend( '<span class="spinner"></span>' );
		jQuery( '.spinner' ).spin( 'tiny' );
		var loadMoreURL = jQuery( loadMoreLink ).attr( 'rel' );

		jQuery( loadMoreLink ).after( "<span class='ajax-target'></span>" );
		jQuery( '.ajax-target' ).load( loadMoreURL + ' #content > div, #content .load-more-link', function() {
			jQuery( '.ajax-target' ).replaceWith( jQuery( this ).html() );	
			jQuery( '.ajaxing' ).animate( { height: 'toggle' }, 200, 'linear', function(){ jQuery( this ).remove(); } );
		});
		
		e.preventDefault();
	});	

	// Load More Comments
	var loadMoreComsLink = '.load-more-comments-wrap a';
	jQuery( '.commentlist' ).on( 'click', loadMoreComsLink, function() {
		jQuery( loadMoreComsLink ).addClass( 'ajaxing' ).text( wptouchFdn.ajaxLoading ).prepend( '<span class="spinner"></span>' );
		jQuery( '.spinner' ).spin( 'tiny' );
		var loadMoreURL = jQuery( loadMoreComsLink ).prop( 'href' );

		jQuery( loadMoreComsLink ).parent().after( "<span class='ajax-target'></span>" );
		jQuery( '.ajax-target' ).load( loadMoreURL + ' ol.commentlist > li', function() {
			jQuery( '.ajax-target' ).replaceWith( jQuery( this ).html() );	
			jQuery( '.ajaxing' ).animate( { height: 'toggle' }, 200, 'linear', function(){ jQuery( this ).parent().remove(); } );
		});
		
		return false;
	});

	// Load More Post Search Results
	var loadMorePostSearchLink = 'a.load-more-post-link';
	jQuery( '#content' ).on( 'click', loadMorePostSearchLink, function( e ) {
		jQuery( loadMorePostSearchLink ).addClass( 'ajaxing' ).text( wptouchFdn.ajaxLoading ).prepend( '<span class="spinner"></span>' );
		jQuery( '.spinner' ).spin( 'tiny' );
		var loadMoreURL = jQuery( loadMorePostSearchLink ).attr( 'rel' );

		jQuery( loadMorePostSearchLink ).after( "<span class='ajax-target'></span>" );
		jQuery( '.ajax-target' ).load( loadMoreURL + ' #content #post-results, #content .load-more-post-link', function() {
			jQuery( '.ajax-target' ).replaceWith( jQuery( this ).html() );	
			jQuery( '.ajaxing' ).animate( { height: 'toggle' }, 200, 'linear', function(){ jQuery( this ).remove(); } );
		});
		
		e.preventDefault();
	});	

	// Load More Page Search Results
	var loadMorePageSearchLink = 'a.load-more-page-link';
	jQuery( '#content' ).on( 'click', loadMorePageSearchLink, function( e ) {
		jQuery( loadMorePageSearchLink ).addClass( 'ajaxing' ).text( wptouchFdn.ajaxLoading ).prepend( '<span class="spinner"></span>' );
		jQuery( '.spinner' ).spin( 'tiny' );
		var loadMoreURL = jQuery( loadMorePageSearchLink ).attr( 'rel' );

		jQuery( loadMorePageSearchLink ).after( "<span class='ajax-target'></span>" );
		jQuery( '.ajax-target' ).load( loadMoreURL + ' #content #page-results, #content .load-more-page-link', function() {
			jQuery( '.ajax-target' ).replaceWith( jQuery( this ).html() );	
			jQuery( '.ajaxing' ).animate( { height: 'toggle' }, 200, 'linear', function(){ jQuery( this ).remove(); } );
		});
		
		e.preventDefault();
	});	

}
jQuery( document ).ready( function() { doFoundationLoadMoreReady(); });
/*global jQuery */
/*!
* FitVids 1.0.1 (modded by http://ialreadydontlikeyou.tumblr.com/post/19574163656/a-modification-to-fitvids-js)
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    }

	var div = document.createElement('style'),
	ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.innerHTML =
		'.fluid-width-video-wrapper {				\
			width: 100%;										\
			position: relative;								\
			padding: 0;										\
		}                           			       				\
																	\
		.fluid-width-video-wrapper iframe,		\
		.fluid-width-video-wrapper object, 		\
		.fluid-width-video-wrapper embed {	\
			position: absolute;							\
			top: 0;                          					\
			left: 0;                        						\
			width: 100%;                    					\
			height: 100%;									\
		}';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        // Vimeo
        "iframe[src^='http://player.vimeo.com']",
        "iframe[src^='https://player.vimeo.com']",
        "iframe[src^='//player.vimeo.com']",
        // YouTube
        "iframe[src^='http://www.youtube.com']",
        "iframe[src^='https://www.youtube.com']",
        "iframe[src^='//www.youtube.com']",
        // Others
        "iframe[src^='http://www.kickstarter.com']",
		"iframe[src^='http://www.funnyordie.com']",
		"iframe[src^='http://media.mtvnservices.com']",
		"iframe[src^='http://trailers.apple.com']",
		"iframe[src^='http://www.brightcove.com']",
		"iframe[src^='http://blip.tv']",
		"iframe[src^='http://break.com']",
		"iframe[src^='http://www.traileraddict.com']",
		"iframe[src^='http://d.yimg.com']",
		"iframe[src^='http://movies.yahoo.com']",
		"iframe[src^='http://www.dailymotion.com']",
		"iframe[src^='http://s.mcstatic.com']",
		"iframe[src^='http://vine.co']",
		"iframe[src^='https://vine.co']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(),
            aspectRatio = height / $this.width();
		if(!$this.attr('id')){
			var videoID = 'fitvid' + Math.floor(Math.random()*999999);
			$this.attr('id', videoID);
		}
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });

  }
})( jQuery );
/* WPtouch Foundation Media Handling Code */

function handleVids() {
	// Add dynamic automatic video resizing via fitVids (if enabled)
	if ( jQuery.isFunction( jQuery.fn.fitVids ) ) {	
		jQuery( '#content' ).fitVids();
	}
	
	// Add dynamic automatic video resizing via CoyierVids (if enabled)
	if ( typeof window.coyierVids == 'function' ) {
		coyierVids();
	}
	
	// If we have html5 videos, add controls for them if they're not specified, CSS will style them appropriately
	if ( jQuery( 'video' ).length ) {
		jQuery( 'video' ).attr( 'controls', 'controls' );
	}
}

// Fixes all HTML5 videos from trigging when menus are overtop
function listenForMenuOpenHideVideos(){
	jQuery( '.show-hide-toggle' ).on( 'click', function(){
		setTimeout( function(){
			var menuDisplay = jQuery( '#menu, #alt-menu' ).css( 'display' );
			if ( menuDisplay == 'block' ) {
				jQuery( '.css-videos video, .css-videos embed, .css-videos object, .css-videos .mejs-container' ).css( 'visibility', 'hidden' );
			} else {
				jQuery( '.css-videos video, .css-videos embed, .css-videos object, .css-videos .mejs-container' ).css( 'visibility', 'visible' );			
			}
		}, 500 );

	});
}

jQuery( document ).ready( function() { 
	handleVids(); 
	listenForMenuOpenHideVideos();
});
/*
 * jquery.tappable.js version 0.2
 *
 * 'Tapped' touch behaviour for elements
 *
 *  - A 'touched' class is added to the element as soon as it is tapped (or, in
 *    the case of a "long tap" - when the user keeps their finger down for a
 *    moment - after a specified delay).
 *
 *  - The supplied callback is called as soon as the user lifts their finger.
 *
 *  - The class is removed, and firing of the callback cancelled, if the user moves
 *    their finger (though this can be disabled).
 *
 *  - If the browser doesn't support touch events, it falls back to click events.
 *
 * More detailed explanation of behaviour and background:
 * http://aanandprasad.com/articles/jquery-tappable/
 *
 * See it in action here: http://nnnnext.com
 *
 * I recommend that you add a `-webkit-tap-highlight-color: rgba(0,0,0,0)`
 * style rule to any elements you wish to make tappable, to hide the ugly grey
 * click overlay.
 *
 * Tested on iOS 4.3 and some version of Android, I don't know. Leave me alone.
 *
 * Basic usage:
 *
 *   $(element).tappable(function() { console.log("Hello World!") })
 *
 * Advanced usage:
 *
 *   $(element).tappable({
 *     callback:     function() { console.log("Hello World!") },
 *     cancelOnMove: false,
 *     touchDelay:   150,
 *     onlyIf:       function(el) { return $(el).hasClass('enabled') }
 *   })
 *
 * Options:
 *
 *   cancelOnMove: If truthy, then as soon as the user moves their finger, the
 *                 'touched' class is removed from the element. When they lift
 *                 their finger, the callback will *not* be fired. Defaults to
 *                 true.
 *
 *   touchDelay:   Time to wait (ms) before adding the 'touched' class when the
 *                 user performs a "long tap". Best employed on elements that the
 *                 user is likely to touch while scrolling. Around 150 will work
 *                 well. Defaults to 0.
 *   
 *   onlyIf:       Function to run as soon as the user touches the element, to
 *                 determine whether to do anything. If it returns a falsy value,
 *                 the 'touched' class will not be added and the callback will
 *                 not be fired.
 *
 */
 (function($){var touchSupported=("ontouchstart" in window);$.fn.tappable=function(options){var cancelOnMove=true,onlyIf=function(){return true},touchDelay=0,callback;switch(typeof options){case"function":callback=options;break;case"object":callback=options.callback;if(typeof options.cancelOnMove!="undefined"){cancelOnMove=options.cancelOnMove}if(typeof options.onlyIf!="undefined"){onlyIf=options.onlyIf}if(typeof options.touchDelay!="undefined"){touchDelay=options.touchDelay}break}var fireCallback=function(el,event){if(typeof callback=="function"&&onlyIf(el)){callback.call(el,event)}};if(touchSupported){this.bind("touchstart",function(event){var el=this;if(onlyIf(this)){$(el).addClass("touch-started");window.setTimeout(function(){if($(el).hasClass("touch-started")){$(el).addClass("touched")}},touchDelay)}return true});this.bind("touchend",function(event){var el=this;if($(el).hasClass("touch-started")){$(el).removeClass("touched").removeClass("touch-started");fireCallback(el,event)}return true});/*this.bind("click",function(event){ event.preventDefault() });*/if(cancelOnMove){this.bind("touchmove",function(){$(this).removeClass("touched").removeClass("touch-started")})}}else{if(typeof callback=="function"){this.bind("click",function(event){if(onlyIf(this)){callback.call(this,event)}})}}return this}})(jQuery);
jQuery( window ).load( function() {
	bindTappableEls( '.tappable, .show-hide-toggle, .slide-toggle, .menu-btn' );
});

jQuery( document ).ajaxComplete( function() {
	bindTappableEls( '.tappable, .show-hide-toggle, .slide-toggle, .menu-btn' );
});

function bindTappableEls( elements ){
	jQuery( elements ).each( function(){
		jQuery( this ).tappable({ touchDelay: 90 });
	});
}
/* WPtouch Foundation FastClick w/ jQuery Code */
jQuery( function() {
    FastClick.attach( document.body );
});
function FastClick(layer,options){var oldOnClick;options=options||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=options.touchBoundary||10;this.layer=layer;this.tapDelay=options.tapDelay||200;if(FastClick.notNeeded(layer)){return}function bind(method,context){return function(){return method.apply(context,arguments)}}var methods=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var context=this;for(var i=0,l=methods.length;i<l;i++){context[methods[i]]=bind(context[methods[i]],context)}if(deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);var deviceIsIOS4=deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&(/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);var deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(target){switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if((deviceIsIOS&&target.type==="file")||target.disabled){return true}break;case"label":case"video":return true}return(/\bneedsclick\b/).test(target.className)};FastClick.prototype.needsFocus=function(target){switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return !deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return !target.disabled&&!target.readOnly;default:return(/\bneedsfocus\b/).test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){if(deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){var length;if(deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!deviceIsIOS4){if(touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if((event.timeStamp-this.lastClickTime)<this.tapDelay){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if((event.timeStamp-this.lastClickTime)<this.tapDelay){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(deviceIsAndroid){return false}targetElement=forElement}}else{if(this.needsFocus(targetElement)){if((event.timeStamp-trackingClickStart)>100||(deviceIsIOS&&window.top!==window&&targetTagName==="input")){this.targetElement=null;return false}this.focus(targetElement);this.sendClick(targetElement,event);if(!deviceIsIOS||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}}if(deviceIsIOS&&!deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){var layer=this.layer;if(deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){var metaViewport;var chromeVersion;var blackberryVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(deviceIsBlackBerry10){blackberryVersion=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(blackberryVersion[1]>=10&&blackberryVersion[2]>=3){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer,options){return new FastClick(layer,options)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return FastClick})}else{if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}};
/*! PushIt - v1.0
* An elegant transform-based off-canvas solution for providing left & right menus for mobile websites, complete with jQuery fallback.
* Based on "Pushy" by Christopher Yee - http://christopheryee.ca/pushy/
* Modified for left and right menu support by BraveNewCode Inc. for WPtouch - http://www.wptouch.com
*/

// Let's get the current vendor prefix for each browser
var prefix = (function() {
	var styles = window.getComputedStyle( document.documentElement, '' ),
	vendor = ( Array.prototype.slice.call( styles ).join( '' ).match( /-(moz|webkit|ms)-/ ) || ( styles.OLink === '' && ['', 'o'] ) )[1];
	return { css: '-' + vendor + '-' }
})();

( function( $ ){

	// Hey! Ow! Push it good!
	$.fn.pushIt = function( options ) {

		var settings = $.extend( {
			leftMenu: 			jQuery( '.pushit-left' ),
			rightMenu:	 		jQuery( '.pushit-right' ),
			body: 				jQuery( 'body' ),
			container: 			jQuery( '.page-wrapper' ),	// container element
			pushItActiveClass:	'pushit-active',			// element to toggle site overlay
			containerClass: 	'container-pushit',			// container open
			menuBtn: 			jQuery('.menu-btn'),		// css classe(s) to toggle the menu
			viewportWidth:	 	jQuery( window ).width(),	// Needed to position a right menu
			menuWidth:	 		240,						// Menu width (default is 240px)
			menuSpeed:	 		330,						// Speed of the menu transistion, in milliseconds
			bezierCurve:		'.290, .050, .140, .870',	// Menu transistion bezier
			pushed: 			false
		}, options );

		var hasOverflowScroll = typeof( jQuery( 'body' )[0].style['-webkit-overflow-scrolling'] ) !== 'undefined';
		if ( hasOverflowScroll ) {
			jQuery( 'body' ).addClass( 'has-overflow-scroll' );
		}

		// Add the overlay div
		settings.body.append( '<div id="pushit-overlay"></div>' );
		var pushitOverlay = jQuery( '#pushit-overlay' );

		// Setup default positioning and width
		settings.leftMenu.addClass( 'pushit-left' )
			.css( 'left', '-' + settings.menuWidth + 'px' )
			.css( 'width', settings.menuWidth + 'px' );

		// Setup default positioning and width
		settings.rightMenu.addClass( 'pushit-right' )
			.css( 'width', settings.menuWidth + 'px' )
			.css( 'left', settings.viewportWidth + 'px' );

		// Make sure it's positioned relative & add the transition CSS for slide prep
		settings.container
			.css( 'position', 'relative' )
			.css( prefix.css+'transition', prefix.css+'transform .'+settings.menuSpeed+'s cubic-bezier('+settings.bezierCurve+')' );

		// Add the transition CSS for slide  prep
		jQuery( '.pushit' )
			.css( prefix.css+'transition', prefix.css+'transform .'+settings.menuSpeed+'s cubic-bezier('+settings.bezierCurve+')' );

		function whichPushIt( clicked ){
			var parent = clicked;
			if ( parent.hasClass( 'pushit-left' ) ) {
				return 'left';
			} else {
				return 'right';
			}
		}

		function oppositePushIt( direction ) {
			var direction = ( direction == 'left' ? 'right' : 'left' );
			return direction;
		}

		function cleanUpPushit(){
			setTimeout( function(){
				// Cleanup memory usage!
				settings.container
					.css( prefix.css+'transform', '' )
					.css( 'overflow', '' )
					.css( 'height', '' );
				pushitOverlay.css( 'z-index', '-1' );
			}, settings.menuSpeed + 300 );
		}

		// Close menu when clicking container
		function pushitCloseListener() {
			pushitOverlay.one( 'click.pushit touchmove.pushit', function( e ){
				e.preventDefault();
				e.stopImmediatePropagation();
				togglePushIt( settings.pushed );
				pushitOverlay.off( 'click.pushit touchmove.pushit' );
			}).css( 'z-index', '99' );
		}

		function togglePushIt( clicked ){
			settings.pushed = clicked;
			direction = whichPushIt( clicked );
			var side = ('.pushit-' + direction );
			var activeSide = jQuery( side );
			jQuery( side ).toggleClass( 'pushit-open' );

			// Left Menus
			// Open
			if ( side == '.pushit-left' && activeSide.hasClass( 'pushit-open' ) ) {
				pushitCloseListener();
				if ( prefix.css != '' ){
					activeSide.css( prefix.css+'transform', 'translate3d(' + settings.menuWidth + 'px, 0, 0)' );
					settings.container
						.css( prefix.css+'transform', 'translate3d(' + settings.menuWidth + 'px, 0, 0)' )
						.height( window.innerHeight )
						.css( 'overflow', 'hidden' );
				} else {
					activeSide.animate( { left: '0' }, settings.menuSpeed );
					settings.container
						.height( window.innerHeight )
						.css( 'overflow', 'hidden' )
						.animate( { left: settings.menuWidth }, settings.menuSpeed );
				}
			// Closed
			} else if ( side == '.pushit-left' && !activeSide.hasClass( 'pushit-open' ) ) {
				if ( prefix.css != '' ){
					activeSide.css( prefix.css+'transform', 'translate3d(0, 0, 0)' );
					settings.container.css( prefix.css+'transform', 'translate3d(0, 0, 0)' );
				} else {
					activeSide.animate( { left: '-' + settings.menuWidth }, settings.menuSpeed );
					settings.container.animate( { left: '0' }, settings.menuSpeed );
				}
				cleanUpPushit();
			}
			// Right Menus
			// Open
			if ( side == '.pushit-right' && jQuery( side ).hasClass( 'pushit-open' ) ) {
				pushitCloseListener();
				if ( prefix.css != '' ){
					activeSide
						.css( prefix.css+'transform', 'translate3d(-' + settings.menuWidth + 'px, 0, 0)' );
					settings.container
						.css( prefix.css+'transform', 'translate3d(-' + settings.menuWidth + 'px, 0, 0)' )
						.height( window.innerHeight )
						.css( 'overflow', 'hidden' );
				} else {
					activeSide
						.animate( { left: settings.viewportWidth - settings.menuWidth }, settings.menuSpeed );
					settings.container
						.height( window.innerHeight )
						.css( 'overflow', 'hidden' )
						.animate( { left: '-' + settings.menuWidth }, settings.menuSpeed );
				}
			// Closed
			} else if ( side == '.pushit-right' && !jQuery( side ).hasClass( 'pushit-open' ) ) {
				if ( prefix.css != '' ){
					activeSide.css( prefix.css+'transform', 'translate3d(0, 0, 0)' );
					settings.container.css( prefix.css+'transform', 'translate3d(0, 0, 0)' );
				} else {
					activeSide.animate( { left: settings.viewportWidth }, settings.menuSpeed );
					settings.container.animate( { left: '0' }, settings.menuSpeed );
				}
				cleanUpPushit();
			}

			settings.container.toggleClass( whichPushIt( clicked ) );
			settings.body.toggleClass( settings.pushItActiveClass ); //toggle site overlay
			settings.container.toggleClass( settings.containerClass );
		}

		// Close the menu on a rotate— no need to have the browser choke on render
		var currentWindow = jQuery( window );
		currentWindow.resize( function(){
			if ( jQuery( '.pushit-active' ).length ) {
				pushitOverlay.trigger( 'click' );
				cleanUpPushit();
			}
			if ( settings.rightMenu.length ) {
				settings.viewportWidth = currentWindow.width();
				settings.rightMenu.css( 'left', settings.viewportWidth + 'px' );
			}
		});

		// Toggle menu
		settings.menuBtn.on( 'click.pushit-button', function( e ) {
			e.preventDefault();
			e.stopImmediatePropagation();
			menuTarget = '#' + jQuery( this ).attr( 'data-menu-target' );
			togglePushIt( jQuery( menuTarget ).parent() );
		});
	}
})( jQuery );
/* WPtouch Basic Client-side Ajax Routines */
function WPtouchAjax( actionName, actionParams, callback ) {	
	var ajaxData = {
		action: "wptouch_client_ajax",
		wptouch_action: actionName,
		wptouch_nonce: WPtouch.security_nonce
	};
	
	for ( name in actionParams ) { ajaxData[name] = actionParams[name]; }

	jQuery.post( WPtouch.ajaxurl, ajaxData, function( result ) {
		callback( result );	
	});	
}
