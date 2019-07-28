Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/createThemedComponent.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=





createThemedComponent;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _Theme=require('./Theme');var _ThemedStyle=require('./ThemedStyle');var _ThemedStyle2=_interopRequireDefault(_ThemedStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function createThemedComponent(C){var themedProps=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var
ThemedComponent=function(_Component){_inherits(ThemedComponent,_Component);
























function ThemedComponent(props){_classCallCheck(this,ThemedComponent);var _this=_possibleConstructorReturn(this,(ThemedComponent.__proto__||Object.getPrototypeOf(ThemedComponent)).call(this,
props));

var theme=(0,_Theme.getCurrentTheme)();
_this.state={
theme:theme,
props:themedProps.reduce(function(res,key){
res[key]=theme.getProp(props[key]);
return res;
},{})};return _this;

}_createClass(ThemedComponent,[{key:'componentWillMount',value:function componentWillMount()

{
this.unregister=(0,_Theme.registerComponent)(this);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var _state=
this.state,theme=_state.theme,props=_state.props;

var changed=false;

var newPropsState=themedProps.reduce(function(res,key){
var newValue=theme.getProp(nextProps[key]);
if(props[key]!==newValue){
changed=true;
}
res[key]=newValue;
return res;
},{});

if(changed){
this.setState({
props:newPropsState});

}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unregister();
}},{key:'setTheme',value:function setTheme(

newTheme){var _this2=this;
this.setState({
theme:newTheme,
props:themedProps.reduce(function(res,key){
res[key]=newTheme.getProp(_this2.props[key]);
return res;
},{})});

}},{key:'render',value:function render()

{var _props=
this.props,style=_props.style,children=_props.children,onRef=_props.onRef,other=_objectWithoutProperties(_props,['style','children','onRef']);var _state2=
this.state,theme=_state2.theme,props=_state2.props;

var themedStyle=theme.getStyle(style);

return(
_react2.default.createElement(C,_extends({style:themedStyle,ref:onRef},other,props,{__source:{fileName:_jsxFileName,lineNumber:92}}),
children));


}}]);return ThemedComponent;}(_react.Component);ThemedComponent.displayName='Theme.'+C.displayName;ThemedComponent.propTypes={style:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.instanceOf(_ThemedStyle2.default),_propTypes2.default.object,_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.instanceOf(_ThemedStyle2.default),_propTypes2.default.object]))]),children:_propTypes2.default.oneOfType([_propTypes2.default.node,_propTypes2.default.arrayOf(_propTypes2.default.node)])};ThemedComponent.defaultProps={style:undefined,children:undefined};


return ThemedComponent;
}