$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main-chat" data-message-id=${message.id}>
         <div class="chat-main__group-info">
           <div class="chat-main__group-one">
             ${message.user_name}
           </div>
           <div class="chat-main__group-two">
             ${message.created_at}
           </div>
         </div>
         <div class="chat-main__message-send">
           <p class="chat-main__message-send__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main-chat" data-message-id=${message.id}>
         <div class="chat-main__group-info">
           <div class="chat-main__group-one">
             ${message.user_name}
           </div>
           <div class="chat-main__group-two">
             ${message.created_at}
           </div>
         </div>
         <div class="chat-main__message-send">
           <p class="chat-main__message-send__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main-chat__second').append(html);
    $('.main-chat__second').animate({scrollTop: $('.main-chat__second')[0].scrollHeight},);
    $('form')[0].reset();
  })
  .fail(function() {
    alert('メッセージを送信できません');
  });
  return false;
})
});