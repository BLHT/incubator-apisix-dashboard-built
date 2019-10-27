/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3c41e0"],{"0e01":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("table.add"))+"\n    ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!1,fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[e._l(e.tableKeys,(function(e,t){return n("el-table-column",{key:t,attrs:{label:e.key,prop:e.key,width:e.width,"class-name":"left"===e.align?"":"status-col","header-align":"center"}})})),n("el-table-column",{attrs:{label:e.$t("table.actions"),align:"center",width:"230","class-name":"fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleToEdit(a)}}},[e._v("\n          "+e._s(e.$t("table.edit"))+"\n        ")]),"deleted"!==a.status?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleRemove(a)}}},[e._v("\n          "+e._s(e.$t("table.delete"))+"\n        ")]):e._e()]}}])})],2)],1)},i=[],r=(n("ac6a"),n("456d"),n("a481"),n("4917"),n("75fc")),o=(n("96cf"),n("3b8d")),u=n("d225"),c=n("b0b4"),s=n("308d"),d=n("6bb5"),l=n("4e2b"),p=n("9ab4"),h=n("60a3"),f=n("333d"),b=n("80a7"),m=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(s["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.tableKey=0,e.list=[],e.total=0,e.listLoading=!0,e.listQuery={page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},e.tableData=[],e.tableKeys=[],e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"created",value:function(){this.getList()}},{key:"getList",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.listLoading=!0,this.tableKeys=[{key:"id",width:100},{key:"description",width:300,align:"left"},{key:"uri",width:200},{key:"host",width:200},{key:"remote_addr",width:200},{key:"upstream_id",width:200},{key:"service_id",width:200},{key:"methods",width:200},{key:"plugins",width:400}],e.next=4,Object(b["b"])();case 4:t=e.sent,n=t.node.nodes,a=void 0===n?[]:n,a=Object(r["a"])(a).map((function(e){var t=e.key.match(/\/([0-9]+)/)[1],n=t.replace(/^(0+)/,""),a=e.value,i=a.uri,r=void 0===i?"":i,o=a.host,u=void 0===o?"":o,c=a.remote_addr,s=void 0===c?"":c,d=a.upstream_id,l=void 0===d?"":d,p=a.service_id,h=void 0===p?"":p,f=a.methods,b=void 0===f?[]:f,m=a.plugins,g=void 0===m?{}:m,y=a.desc,v=void 0===y?"":y;return b=b.join(", "),g=Object.keys(g).join(", "),{id:n,realId:t,uri:r,host:u,remote_addr:s,upstream_id:l&&String(l).replace(/^(0+)/,""),service_id:h&&String(h).replace(/^(0+)/,""),methods:b,plugins:g,description:v}})),this.tableData=a,this.total=a.length,setTimeout((function(){i.listLoading=!1}),500);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handleFilter",value:function(){this.listQuery.page=1,this.getList()}},{key:"handleRemove",value:function(e){var t=this;this.$confirm("Do you want to remove router ".concat(e.id,"?"),"Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(b["d"])(e.realId);case 2:t.getList(),t.$message.success("Remove router ".concat(e.id," successfully!"));case 4:case"end":return n.stop()}}),n)}))))}},{key:"sortChange",value:function(e){var t=e.prop,n=e.order;"id"===t&&this.sortByID(n)}},{key:"sortByID",value:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()}},{key:"handleCreate",value:function(){this.$router.push({name:"SchemaRoutesCreate"})}},{key:"handleToEdit",value:function(e){this.$router.push({name:"SchemaRoutesEdit",params:{id:e.realId}})}}]),t}(h["c"]);m=p["a"]([Object(h["a"])({name:"RoutesList",components:{Pagination:f["a"]}})],m);var g=m,y=g,v=n("2877"),k=Object(v["a"])(y,a,i,!1,null,null,null);t["default"]=k.exports},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[],r=n("d225"),o=n("b0b4"),u=n("308d"),c=n("6bb5"),s=n("4e2b"),d=n("9ab4"),l=n("60a3"),p=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},h=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),f=function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e},b=function(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop},m=function(e,t,n){var a=b(),i=e-a,r=20,o=0;t="undefined"===typeof t?500:t;var u=function e(){o+=r;var u=p(o,a,i,t);f(u),o<t?h(e):n&&"function"===typeof n&&n()};u()},g=function(e){function t(){return Object(r["a"])(this,t),Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),Object(o["a"])(t,[{key:"handleSizeChange",value:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&m(0,800)}},{key:"handleCurrentChange",value:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&m(0,800)}},{key:"currentPage",get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},{key:"pageSize",get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}]),t}(l["c"]);d["a"]([Object(l["b"])({required:!0})],g.prototype,"total",void 0),d["a"]([Object(l["b"])({default:1})],g.prototype,"page",void 0),d["a"]([Object(l["b"])({default:20})],g.prototype,"limit",void 0),d["a"]([Object(l["b"])({default:function(){return[10,20,30,50]}})],g.prototype,"pageSizes",void 0),d["a"]([Object(l["b"])({default:"total, sizes, prev, pager, next, jumper"})],g.prototype,"layout",void 0),d["a"]([Object(l["b"])({default:!0})],g.prototype,"background",void 0),d["a"]([Object(l["b"])({default:!0})],g.prototype,"autoScroll",void 0),d["a"]([Object(l["b"])({default:!1})],g.prototype,"hidden",void 0),g=d["a"]([Object(l["a"])({name:"Pagination"})],g);var y=g,v=y,k=(n("42e2"),n("2877")),w=Object(k["a"])(v,a,i,!1,null,"1ff35890",null);t["a"]=w.exports},"42e2":function(e,t,n){"use strict";var a=n("5390"),i=n.n(a);i.a},5390:function(e,t,n){},"80a7":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n("b32d"),i=function(){return Object(a["a"])({url:"/routes",method:"GET"})},r=function(e,t){return Object(a["a"])({url:"/routes/".concat(e),method:"PUT",data:t})},o=function(e){return Object(a["a"])({url:"/routes/".concat(e),method:"GET"})},u=function(e){return Object(a["a"])({url:"/routes/".concat(e),method:"DELETE"})},c=function(e){return Object(a["a"])({url:"/routes",method:"POST",data:e})}},b32d:function(e,t,n){"use strict";var a=n("bc3a"),i=n.n(a),r=n("5c96"),o=i.a.create({baseURL:"/apisix/admin/",timeout:5e3});o.interceptors.request.use((function(e){return e}),(function(e){Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data}),(function(e){return Object(r["Message"])({message:e.response.data.error_msg||e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=o}}]);