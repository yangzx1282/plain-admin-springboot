(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae598"],{"0a4e":function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("el-card",{staticClass:"box-card"},[t("el-row",[t("el-col",{attrs:{span:10}},[t("el-form",{ref:"modelForm",attrs:{rules:e.formRules,model:e.modelForm,size:"small","label-width":"70px"}},[t("el-form-item",{attrs:{label:"头像"}},[t("el-row",{attrs:{type:"flex",align:"middle"}},[t("el-col",{attrs:{span:10}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$api.FILE_UPLOAD,"show-file-list":!1,headers:e.headers,name:"files",data:{type:"avatar"},"on-success":e.handleAvatarSuccess,"on-error":e.handleAvatarError,"before-upload":e.beforeAvatarUpload}},[e.modelForm.avatar?t("el-avatar",{attrs:{size:100,src:e.$tools.buildAvatar(e.modelForm.avatar)}},[t("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})]):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],1)],1),t("el-col",{attrs:{span:12}})],1)],1),t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{staticStyle:{display:"none"},attrs:{disabled:!0},model:{value:e.modelForm.id,callback:function(o){e.$set(e.modelForm,"id",o)},expression:"modelForm.id"}}),t("el-input",{attrs:{disabled:!0},model:{value:e.modelForm.username,callback:function(o){e.$set(e.modelForm,"username",o)},expression:"modelForm.username"}})],1),t("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[t("el-input",{model:{value:e.modelForm.nickname,callback:function(o){e.$set(e.modelForm,"nickname",o)},expression:"modelForm.nickname"}})],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"性别",prop:"gender"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.modelForm.gender,callback:function(o){e.$set(e.modelForm,"gender",o)},expression:"modelForm.gender"}},e._l(e.genderOps,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{model:{value:e.modelForm.age,callback:function(o){e.$set(e.modelForm,"age",e._n(o))},expression:"modelForm.age"}})],1)],1)],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{type:"email"},model:{value:e.modelForm.email,callback:function(o){e.$set(e.modelForm,"email",o)},expression:"modelForm.email"}})],1),t("el-form-item",{attrs:{label:"原密码",prop:"password"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.modelForm.password,callback:function(o){e.$set(e.modelForm,"password",o)},expression:"modelForm.password"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"newPwd"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.modelForm.newPwd,callback:function(o){e.$set(e.modelForm,"newPwd",o)},expression:"modelForm.newPwd"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"confirmPwd"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.modelForm.confirmPwd,callback:function(o){e.$set(e.modelForm,"confirmPwd",o)},expression:"modelForm.confirmPwd"}})],1),t("el-form-item",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1),t("el-col",{attrs:{span:14}},[t("el-timeline",e._l(e.loginTrack,(function(o){return t("el-timeline-item",{key:o.id,attrs:{timestamp:o.loginTime,placement:"top"}},[t("el-card",[t("h4",[e._v("在IP "+e._s(o.loginIp)+" 登录")])])],1)})),1)],1)],1)],1)],1)},a=[],l=(t("e10e"),t("6d57"),{name:"Mine",data:function(){var e=this,o=function(o,t,r){var a=/[\w\d]{6,18}/;return a.test(e.modelForm.newPwd)?e.modelForm.newPwd&&""!=e.modelForm.newPwd.trim()&&e.modelForm.password==e.modelForm.newPwd?r(new Error("原密码和新密码不可以相同")):void r():r(new Error("请输入6-18位的英文和数字密码"))},t=function(o,t,r){if(e.modelForm.newPwd!=e.modelForm.confirmPwd)return r(new Error("两次输入密码不相同"));r()};return{API:this.$api.PROP_API,headers:{Authorization:"Bearer "+this.$store.state.token},loginTrack:[],genderOps:[{value:"",label:"请选择性别"},{value:"男",label:"男"},{value:"女",label:"女"}],modelForm:{id:null,username:"",nickname:"",avatar:"",email:"",age:null,gender:""},formRules:{nickname:[{required:!0,message:"用户昵称不可以为空",trigger:"blur"},{min:4,max:10,message:"长度在4-10个字符之间",trigger:"blur"}],password:[{min:6,max:18,message:"长度在6-18个字符之间",trigger:"blur"}],newPwd:[{validator:o,trigger:"blur"},{min:6,max:18,message:"长度在6-18个字符之间",trigger:"blur"}],confirmPwd:[{validator:t,trigger:"blur"},{min:6,max:18,message:"长度在6-18个字符之间",trigger:"blur"}]},original:null}},methods:{beforeAvatarUpload:function(){},handleAvatarSuccess:function(e,o,t){console.log(e),200==e.code?(this.$notify({title:e.msg,type:"success"}),this.modelForm.avatar=e.data,console.log(this.modelForm.avatar)):this.$notify({title:e.msg,type:"waring"})},handleAvatarError:function(e){this.$notify({title:"上传失败",type:"error"})},queryHandler:function(){},onSubmit:function(){var e=this;this.$refs["modelForm"].validate((function(o){if(!o)return!1;console.log(e.modelForm),e.$axios.post(e.$api.USER_INFO,e.modelForm).then((function(o){if(console.log(o),200==o.code){var t=e.$store.state.user;t=Object.assign(t,e.modelForm),e.$store.commit("setUser",t)}})).catch((function(e){}))}))},onSendMail:function(){var e=this,o=new FormData;Object.keys(this.sendForm).forEach((function(t){o.append(t,e.sendForm[t])})),this.$axios.post(this.$api.MAIL_SEND,o,!0,{"Content-Type":"application/x-www-form-urlencoded"}).then((function(e){e.code})).catch((function(o){e.$notify({title:res.msg,type:"error"})}))},queryUserTrack:function(){var e=this;this.$axios.get(this.$api.USER_TRACK,{size:5},!1).then((function(o){200==o.code&&(console.log(o.data),e.loginTrack=o.data)})).catch((function(o){e.$notify({title:res.msg,type:"error"})}))}},computed:{buildAvatar:function(){return this.$api.SERVER_UPLOAD+this.$tools.buildAvatar(this.modelForm.avatar)}},mounted:function(){var e=this;this.queryUserTrack();var o=setInterval((function(){e.$store.state.user&&(clearInterval(o),Object.keys(e.modelForm).forEach((function(o){e.modelForm[o]=e.$store.state.user[o]})))}),50);console.log(this.$api)}}),n=l,s=t("9ca4"),i=Object(s["a"])(n,r,a,!1,null,null,null);o["default"]=i.exports}}]);