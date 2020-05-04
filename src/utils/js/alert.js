/* 重写后的点击框 */
export default (title,info,success)=>{
		    var box = document.getElementById("alert");
			var html = '<div id="content"><div id="content-title">' + title + '</div><div id="content-content">' + info + '</div><div id="content-button"><button id="alert-button-cancel">取消</button><button id="alert-button-confirm">确定</button></div><\/div>';
			if( box ){
				box.innerHTML = html;
				box.style.display = "block";
			}
			else {
				var div = document.createElement("div");
				div.id = "alert";
				document.body.appendChild(div);
				div.innerHTML = html;
			}
			/* button点击事件 */
			//取消按钮的点击事件
			let  button_cancel = document.getElementById("alert-button-cancel");
			button_cancel.onclick= function(){
				let div = document.getElementById("alert");
				div.remove(div)
				if(success!=undefined){
					success("cancel")
				}
			}
			//确认按钮点击事件
			let  button_confirm = document.getElementById("alert-button-confirm");
			button_confirm.onclick= function(){
				  let div = document.getElementById("alert");
				  div.remove(div)
				  if(success!=undefined){
				  success("confirm")
				  }
			}
}

