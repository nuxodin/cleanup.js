// Resources:
// https://dev.w3.org/html5/pf-summary/obsolete.html
// https://www.powermapper.com/products/sortsite/rules/w3cdepr/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features
// https://developer.apple.com/documentation/webkit/deprecated_symbols/document_object_models_api_legacy

const tree = {
    window:{
        ScriptProcessorNode:1,
        PerformanceNavigation:1,
        PerformanceTiming:1,
        WebKitCSSMatrix:1,
        SVGMatrix:1,
        SVGPoint:1,
        SVGPointList:1,
        MutationEvent:1,
        HTMLMarqueeElement:1,
        HTMLAllCollection:1,
        HTMLDirectoryElement:1,
        HTMLFontElement:1,
        HTMLFrameElement:1,
        PluginArray:1,
        Plugin:1,
        WebKitMutationObserver:1,
        MouseScrollEvent:1,
        applicationCache:1,
        external:1,
        escape:1,
        content:1,
        captureEvents:1,
        ondevicelight:1,
        ondeviceproximity:1,
        onuserproximity:1,
        onmozfullscreenchange:1,
        onmozfullscreenerror:1,
        onwebkitanimationend:1,
        onwebkitanimationiteration:1,
        onwebkitanimationstart:1,
        onwebkittransitionend:1,
        netscape:1,
        releaseEvents:1,
        dump:1,
        setResizable:1,
        mozRTCIceCandidate:1,
        mozRTCPeerConnection:1,
        mozRTCSessionDescription:1,
        pageXOffset:1,
        pageYOffset:1,
        webkitURL:1,
        unescape:1,
        screenX:1,
        screenY:1,
        sidebar:1,
        webkitRequestAnimationFrame:1,
        webkitCancelAnimationFrame:1,
        webkitStorageInfo:1,
        webkitMediaStream:1,
        webkitRTCPeerConnection:1,
        clientInformation:1,
    },
    Object:{
        prototype:{
            __proto__:1,
            __defineGetter__:1,
            __defineSetter__:1,
            __lookupGetter__:1,
            __lookupSetter__:1,
        }
    },
    String:{
        prototype:{
            anchor:1,
            big:1,
            blink:1,
            bold:1,
            fixed:1,
            fontcolor:1,
            fontsize:1,
            italics:1,
            link:1,
            small:1,
            strike:1,
            sub:1,
            substr:1,
            sup:1,
        }
    },
    Date:{
        prototype:{
            getYear:1,
            setYear:1,
            toGMTString:1,
        }
    },
    RegExp:{
        prototype:{
            compile:1,
        }
    },
    CSSStyleDeclaration:{
        prototype:{
            getPropertyCSSValue:1,
        }
    },
    Document:{
        prototype:{
            alinkColor:1,
            all:1,
            anchors:1,
            applets:1,
            bgColor:1,
            fgColor:1,
            linkColor:1,
            vlinkColor:1,
            clear:1,
            mozFullScreenElement:1,
            mozFullScreen:1,
            mozFullScreenEnabled:1,
            mozCancelFullScreen:1,
            onmozfullscreenchange:1,
            onmozfullscreenerror:1,
            onwebkitanimationend:1,
            onwebkitanimationiteration:1,
            onwebkitanimationstart:1,
            onwebkittransitionend:1,
            onwebkitfullscreenchange:1,
            onwebkitfullscreenerror:1,
            webkitCancelFullScreen:1,
            webkitCurrentFullScreenElement:1,
            webkitExitFullscreen:1,
            webkitFullscreenElement:1,
            webkitFullscreenEnabled:1,
            webkitIsFullScreen:1,
            webkitVisibilityState:1,
            webkitHidden:1,
        }
    },
    Element:{
        prototype:{
            mozMatchesSelector:1,
            webkitMatchesSelector:1,
            mozRequestFullScreen:1,
            setCapture:1,
            scrollLeftMax:1,
            scrollTopMax:1,
        }
    },
    HTMLElement:{
        prototype:{
            onmozfullscreenchange:1,
            onmozfullscreenerror:1,
            onwebkitanimationend:1,
            onwebkitanimationiteration:1,
            onwebkitanimationstart:1,
            onwebkittransitionend:1,
        }
    },
    HTMLTableElement:{
        prototype:{
            align:1,
            bgColor:1,
            border:1,
        }
    },
    Navigator:{
        prototype:{
            mozGetUserMedia:1,
            taintEnabled:1,
            appCodeName:1,
            appName:1,
            appVersion:1,
            platform:1,
            product:1,
        }
    },
    Screen:{
        prototype:{
            mozLockOrientation:1,
            mozUnlockOrientation:1,
            mozOrientation:1,
            onmozorientationchange:1,
        }
    },
    Event:{
        prototype:{
            initEvent:1,
            cancelBubble:1,
            returnValue:1,
            srcElement:1,
        }
    },
    UIEvent:{
        prototype:{
            initUIEvent:1,
        }
    },
    KeyboardEvent:{
        prototype:{
            initKeyEvent:1,
            initKeyboardEvent:1,
            charCode:1,
            keyCode:1,
            keyIdentifier:1,
            which:1,
            char:1,
        }
    },
    MouseEvent:{
        prototype:{
            initMouseEvent:1,
            initNSMouseEvent:1,
        }
    },
    WheelEvent:{
        prototype:{
            wheelDelta:1,
            wheelDeltaX:1,
            wheelDeltaY:1,
        }
    },
    Range:{
        prototype:{
            compareNode:1,
        }
    },
    CSS2Properties:{
        prototype:{
            MozBoxDirection:1,
            MozBoxAlign:1,
            MozBoxOrient:1,
            MozBoxOrient:1,
            MozBoxPack:1,
            MozFloatEdge:1,
            MozForceBrokenImageIcon:1,
            MozOrient:1,
            MozTextSizeAdjust:1,
            MozUserFocus:1,
            MozUserInput:1,
            MozUserModify:1,
            MozWindowDragging:1,
            MozBoxOrdinalGroup:1,
            MozBoxFlex:1,
            //MozTabSize:1,
            MozImageRegion:1,
            MozOutlineRadiusBottomleft:1,
            MozOutlineRadiusBottomright:1,
            MozOutlineRadiusTopleft:1,
            MozOutlineRadiusTopright:1,
            MozOutlineRadius:1,
            MozBorderStartColor:1,
            MozBorderStartStyle:1,
            MozBorderStartWidth:1,
            MozBorderEndColor:1,
            MozBorderEndStyle:1,
            MozBorderEndWidth:1,
            MozTransitionDuration:1,
            MozTransitionTimingFunction:1,
            MozTransitionProperty:1,
            MozTransitionDelay:1,
            MozAnimationName:1,
            MozAnimationDuration:1,
            MozAnimationTimingFunction:1,
            MozAnimationIterationCount:1,
            MozAnimationDirection:1,
            MozAnimationPlayState:1,
            MozAnimationFillMode:1,
            MozAnimationDelay:1,
            MozTransform:1,
            MozPerspective:1,
            MozPerspectiveOrigin:1,
            MozBackfaceVisibility:1,
            MozTransformStyle:1,
            MozTransformOrigin:1,
            MozAppearance:1,
            MozFontFeatureSettings:1,
            MozFontLanguageOverride:1,
            MozHyphens:1,
            MozMarginStart:1,
            MozMarginEnd:1,
            MozPaddingStart:1,
            MozPaddingEnd:1,
            MozBoxSizing:1,
            MozUserSelect:1,
            MozBorderStart:1,
            MozBorderEnd:1,
            MozBorderImage:1,
            MozTransition:1,
            MozAnimation:1,
            '-moz-box-align':1,
            '-moz-box-direction':1,
            '-moz-box-orient':1,
            '-moz-box-pack':1,
            '-moz-float-edge':1,
            '-moz-force-broken-image-icon':1,
            '-moz-orient':1,
            '-moz-text-size-adjust':1,
            '-moz-user-focus':1,
            '-moz-user-input':1,
            '-moz-user-modify':1,
            '-moz-window-dragging':1,
            '-moz-box-ordinal-group':1,
            '-moz-box-flex':1,
            //'-moz-tab-size':1,
            '-moz-image-region':1,
            '-moz-outline-radius-bottomleft':1,
            '-moz-outline-radius-bottomright':1,
            '-moz-outline-radius-topleft':1,
            '-moz-outline-radius-topright':1,
            '-moz-outline-radius':1,
            '-moz-border-start-color':1,
            '-moz-border-start-style':1,
            '-moz-border-start-width':1,
            '-moz-border-end-color':1,
            '-moz-border-end-style':1,
            '-moz-border-end-width':1,
            '-moz-transition-duration':1,
            '-moz-transition-timing-function':1,
            '-moz-transition-property':1,
            '-moz-transition-delay':1,
            '-moz-animation-name':1,
            '-moz-animation-duration':1,
            '-moz-animation-timing-function':1,
            '-moz-animation-iteration-count':1,
            '-moz-animation-direction':1,
            '-moz-animation-play-state':1,
            '-moz-animation-fill-mode':1,
            '-moz-animation-delay':1,
            '-moz-transform':1,
            '-moz-perspective':1,
            '-moz-perspective-origin':1,
            '-moz-backface-visibility':1,
            '-moz-transform-style':1,
            '-moz-transform-origin':1,
            '-moz-appearance':1,
            '-moz-font-feature-settings':1,
            '-moz-font-language-override':1,
            '-moz-hyphens':1,
            '-moz-margin-start':1,
            '-moz-margin-end':1,
            '-moz-padding-start':1,
            '-moz-padding-end':1,
            '-moz-box-sizing':1,
            '-moz-user-select':1,
            '-moz-border-start':1,
            '-moz-border-end':1,
            '-moz-border-image':1,
            '-moz-transition':1,
            '-moz-animation':1,

            WebkitLineClamp:1,
            WebkitTextStrokeWidth:1,
            WebkitTextFillColor:1,
            WebkitTextStrokeColor:1,
            WebkitTextStroke:1,
            WebkitBackgroundClip:1,
            WebkitBackgroundOrigin:1,
            WebkitBackgroundSize:1,
            WebkitBorderTopLeftRadius:1,
            WebkitBorderTopRightRadius:1,
            WebkitBorderBottomRightRadius:1,
            WebkitBorderBottomLeftRadius:1,
            WebkitTransitionDuration:1,
            WebkitTransitionTimingFunction:1,
            WebkitTransitionProperty:1,
            WebkitTransitionDelay:1,
            WebkitAnimationName:1,
            WebkitAnimationDuration:1,
            WebkitAnimationTimingFunction:1,
            WebkitAnimationIterationCount:1,
            WebkitAnimationDirection:1,
            WebkitAnimationPlayState:1,
            WebkitAnimationFillMode:1,
            WebkitAnimationDelay:1,
            WebkitTransform:1,
            WebkitPerspective:1,
            WebkitPerspectiveOrigin:1,
            WebkitBackfaceVisibility:1,
            WebkitTransformStyle:1,
            WebkitTransformOrigin:1,
            //WebkitAppearance:1,
            WebkitBoxShadow:1,
            WebkitFilter:1,
            WebkitTextSizeAdjust:1,
            WebkitFlexDirection:1,
            WebkitFlexWrap:1,
            WebkitJustifyContent:1,
            WebkitAlignContent:1,
            WebkitAlignItems:1,
            WebkitFlexGrow:1,
            WebkitFlexShrink:1,
            WebkitAlignSelf:1,
            WebkitOrder:1,
            WebkitFlexBasis:1,
            WebkitBoxSizing:1,
            WebkitMaskRepeat:1,
            WebkitMaskPositionX:1,
            WebkitMaskPositionY:1,
            WebkitMaskClip:1,
            WebkitMaskOrigin:1,
            WebkitMaskSize:1,
            WebkitMaskComposite:1,
            WebkitMaskImage:1,
            WebkitUserSelect:1,
            WebkitBoxAlign:1,
            WebkitBoxDirection:1,
            WebkitBoxFlex:1,
            WebkitBoxOrient:1,
            WebkitBoxPack:1,
            WebkitBoxOrdinalGroup:1,
            WebkitBorderRadius:1,
            WebkitBorderImage:1,
            WebkitTransition:1,
            WebkitAnimation:1,
            WebkitFlexFlow:1,
            WebkitFlex:1,
            WebkitMask:1,
            WebkitMaskPosition:1,

            webkitLineClamp:1,
            webkitTextStrokeWidth:1,
            webkitTextFillColor:1,
            webkitTextStrokeColor:1,
            webkitTextStroke:1,
            webkitBackgroundClip:1,
            webkitBackgroundOrigin:1,
            webkitBackgroundSize:1,
            webkitBorderTopLeftRadius:1,
            webkitBorderTopRightRadius:1,
            webkitBorderBottomRightRadius:1,
            webkitBorderBottomLeftRadius:1,
            webkitTransitionDuration:1,
            webkitTransitionTimingFunction:1,
            webkitTransitionProperty:1,
            webkitTransitionDelay:1,
            webkitAnimationName:1,
            webkitAnimationDuration:1,
            webkitAnimationTimingFunction:1,
            webkitAnimationIterationCount:1,
            webkitAnimationDirection:1,
            webkitAnimationPlayState:1,
            webkitAnimationFillMode:1,
            webkitAnimationDelay:1,
            webkitTransform:1,
            webkitPerspective:1,
            webkitPerspectiveOrigin:1,
            webkitBackfaceVisibility:1,
            webkitTransformStyle:1,
            webkitTransformOrigin:1,
            //webkitAppearance:1,
            webkitBoxShadow:1,
            webkitFilter:1,
            webkitTextSizeAdjust:1,
            webkitFlexDirection:1,
            webkitFlexWrap:1,
            webkitJustifyContent:1,
            webkitAlignContent:1,
            webkitAlignItems:1,
            webkitFlexGrow:1,
            webkitFlexShrink:1,
            webkitAlignSelf:1,
            webkitOrder:1,
            webkitFlexBasis:1,
            webkitBoxSizing:1,
            webkitMaskRepeat:1,
            webkitMaskPositionX:1,
            webkitMaskPositionY:1,
            webkitMaskClip:1,
            webkitMaskOrigin:1,
            webkitMaskSize:1,
            webkitMaskComposite:1,
            webkitMaskImage:1,
            webkitUserSelect:1,
            webkitBoxAlign:1,
            webkitBoxDirection:1,
            webkitBoxFlex:1,
            webkitBoxOrient:1,
            webkitBoxPack:1,
            webkitBoxOrdinalGroup:1,
            webkitBorderRadius:1,
            webkitBorderImage:1,
            webkitTransition:1,
            webkitAnimation:1,
            webkitFlexFlow:1,
            webkitFlex:1,
            webkitMask:1,
            webkitMaskPosition:1,
            '-webkit-line-clamp':1,
            '-webkit-text-stroke-width':1,
            '-webkit-text-fill-color':1,
            '-webkit-text-stroke-color':1,
            '-webkit-text-stroke':1,
            '-webkit-background-clip':1,
            '-webkit-background-origin':1,
            '-webkit-background-size':1,
            '-webkit-border-top-left-radius':1,
            '-webkit-border-top-right-radius':1,
            '-webkit-border-bottom-right-radius':1,
            '-webkit-border-bottom-left-radius':1,
            '-webkit-transition-duration':1,
            '-webkit-transition-timing-function':1,
            '-webkit-transition-property':1,
            '-webkit-transition-delay':1,
            '-webkit-animation-name':1,
            '-webkit-animation-duration':1,
            '-webkit-animation-timing-function':1,
            '-webkit-animation-iteration-count':1,
            '-webkit-animation-direction':1,
            '-webkit-animation-play-state':1,
            '-webkit-animation-fill-mode':1,
            '-webkit-animation-delay':1,
            '-webkit-transform':1,
            '-webkit-perspective':1,
            '-webkit-perspective-origin':1,
            '-webkit-backface-visibility':1,
            '-webkit-transform-style':1,
            '-webkit-transform-origin':1,
            //'-webkit-appearance':1,
            '-webkit-box-shadow':1,
            '-webkit-filter':1,
            '-webkit-text-size-adjust':1,
            '-webkit-flex-direction':1,
            '-webkit-flex-wrap':1,
            '-webkit-justify-content':1,
            '-webkit-align-content':1,
            '-webkit-align-items':1,
            '-webkit-flex-grow':1,
            '-webkit-flex-shrink':1,
            '-webkit-align-self':1,
            '-webkit-order':1,
            '-webkit-flex-basis':1,
            '-webkit-box-sizing':1,
            '-webkit-mask-repeat':1,
            '-webkit-mask-position-x':1,
            '-webkit-mask-position-y':1,
            '-webkit-mask-clip':1,
            '-webkit-mask-origin':1,
            '-webkit-mask-size':1,
            '-webkit-mask-composite':1,
            '-webkit-mask-image':1,
            '-webkit-user-select':1,
            '-webkit-box-align':1,
            '-webkit-box-direction':1,
            '-webkit-box-flex':1,
            '-webkit-box-orient':1,
            '-webkit-box-pack':1,
            '-webkit-box-ordinal-group':1,
            '-webkit-border-radius':1,
            '-webkit-border-image':1,
            '-webkit-transition':1,
            '-webkit-animation':1,
            '-webkit-flex-flow':1,
            '-webkit-flex':1,
            '-webkit-mask':1,
            '-webkit-mask-position':1,
        }
    }

}
/* does not work.. :( https://stackoverflow.com/questions/19775573/override-element-stylesheet-csstext
tree.window.CSSStyleDeclaration = {
    prototype:tree.window.CSS2Properties
};
*/

const reported = new Set();

function check(tree, root){
    for (let prop in tree) {
        if (!(prop in root)) continue;
        if (tree[prop] === 1) {
            let discriptor = Object.getOwnPropertyDescriptor(root, prop);
            Object.defineProperty(root, prop, {
                get:function(){
                    const id = new Error().stack;
                    if (!reported.has(id)) {
                        reported.add(id);
                        console.error('🚮 cleanup.js: ' + prop + ' should not be used!');
                    }
                    if (discriptor.value) return discriptor.value;
                    return discriptor.get.call(this);
                },
                set:function(value){
                    console.error('🚮 cleanup.js: ' + prop + ' should not be used!');
                    if (discriptor.set) discriptor.set.call(this, value);
                },
                enumerable:false,
            });
        } else { // reqursive
            check(tree[prop], root[prop]);
        }
    }
}
check(tree, window);
