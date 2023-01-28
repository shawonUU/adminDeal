<template>

  

  <div class="aiz-titlebar mt-2 mb-4">
  <div class="row align-items-center">
    <div class="col-md-6">
      <b class="h4">Conversations</b>
    </div>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <ul v-for="(conversation, index) in conversations" :key="index" class="list-group list-group-flush"> 
        <templete v-if="conversation.receiverData != null && conversation.senderData != null">
            <li class="list-group-item px-0">
              <div class="row gutters-10">
                <div class="col-auto">
                  <div class="media">
                    <span class="avatar avatar-sm flex-shrink-0">
                    <templete v-if="auth.user.id == conversation.sender_id">
                        <img v-if="conversation.receiverData.data[0].avatar_original == null" :src="rootDomain+'assets/img/avatar-place.png'">
                        <img v-else :src="conversation.receiverData.data[0].avatar_original" >
                    </templete>
                    <templete v-else>
                        <img v-if="conversation.senderData.data[0].avatar_original == null" :src="rootDomain+'assets/img/avatar-place.png'">
                        <img v-else :src="conversation.senderData.data[0].avatar_original" >
                    </templete>
                    </span>
                  </div>
                </div>
                <div class="col-auto col-lg-3">
                  <p> 
                     
                      <span v-if="auth.user.id == conversation.sender_id" class="fw-600">{{ conversation.receiverData.data[0].name }}</span>
                      <span v-else class="fw-600">{{ conversation.senderData.data[0].name }}</span> 
                      <br>
                    <span class="opacity-50">{{ conversation.messageData.data[0].date }}</span>
                  </p>
                </div>
                <div class="col-12 col-lg">
                  <div class="block-body">
                    <div class="block-body-inner pb-3">
                      <div class="row no-gutters">
                        <div class="col">
                          <h6 class="mt-0">
                            <a href="" class="text-dark fw-600">
                              {{ conversation.title }}
                            </a>
                            <template v-if="auth.user.id == conversation.sender_id && conversation.sender_viewed == 0 || (auth.user.id == conversation.receiver_id && conversation.receiver_viewed == 0)">
                              <span class="badge badge-inline badge-danger">New</span>
                            </template>
                          </h6>
                        </div>
                      </div>
                      <p class="mb-0 opacity-50">
                        {{ conversation.messageData.data[0].message }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li> 
        </templete>
    </ul>
  </div>
</div>
<div class="aiz-pagination aiz-pagination-center mt-4">
    <vue-awesome-paginate
      :total-items="totalItem"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
      @click="getConversations"
    />
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        auth:{
            isAuthenticated: false,
            user: {},
        },
        totalItem: 0,
        page: 1,
        conversationHolder: [],
        conversations:{},
        currentPage:1,
      }
    },
    created(){
      var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getConversations(1);
        }
    },
    methods:{
      getConversations(page){
        
        if(!this.conversationHolder[page]){
          axios.get(this.selfDomain+"vueweb/conversations?page="+page, {
              headers: {
                totalitem: this.totalItem,
                token: this.auth.user.access_token,
                Authorization: "Bearer " + this.auth.user.access_token,
              }
          }).then(res=>{
              this.conversationHolder[page] = res.data.conversations.data;
              this.conversations =  this.conversationHolder[page];
              this.totalItem = res.data.totalItem;
              // console.log(res.data);
          }).catch(err=>{

          });
        }else{this.conversations =  this.conversationHolder[page];}
      }
    }
}
</script>

<style>

</style>