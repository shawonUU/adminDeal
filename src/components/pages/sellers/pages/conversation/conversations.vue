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
        <ul class="list-group list-group-flush">
              <template v-for="(conversation,index) in conversations" :key="index">
                <li v-if="conversation.receiver != null && conversation.sender != null" class="list-group-item px-0">
                      <div class="row gutters-10">
                          <div class="col-auto">
                              <div class="media">
                                  <span class="avatar avatar-sm flex-shrink-0">
                                     <template v-if="auth.user.id == conversation.sender_id">
                                        <img :src="conversation.receiver.avatar_original == null?'assets/img/avatar-place.png':conversation.receiver_avatar_original">
                                     </template>
                                     <template v-else>
                                        <img :src="conversation.sender.avatar_original == null?'assets/img/avatar-place.png':conversation.sender_avatar_original">
                                     </template>
                                     
                                </span>
                              </div>
                          </div>
                          <div class="col-auto col-lg-3">
                                 <p>
                                      <span v-if="auth.user.id == conversation.sender_id" class="fw-600">{{ conversation.receiver.name }}</span>
                                      <span v-else class="fw-600">{{ conversation.sender.name }}</span>
                                  <br>
                                  <span class="opacity-50">
                                      {{ conversation.created_time }}
                                  </span>
                              </p>
                          </div>
                          <div class="col-12 col-lg">
                              <div class="block-body">
                                  <div class="block-body-inner pb-3">
                                      <div class="row no-gutters">
                                          <div class="col">
                                              <h6 class="mt-0">n.
                                                  <a href="seller.conversations.show', encrypt($conversation->id" class="text-dark fw-600">
                                                      {{ conversation.title }}
                                                  </a>                                                 
                                                      <span v-if="(auth.user.id == conversation.sender_id && conversation.sender_viewed == 0) || (auth.user.id == conversation.receiver_id && conversation.receiver_viewed == 0)" class="badge badge-inline badge-danger">New</span>                                       
                                              </h6>
                                          </div>
                                      </div>
                                      <p class="mb-0 opacity-50">
                                          {{ conversation.last_message }}
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </li>
              </template>
      </ul>
      </div>
    </div>
    <div class="aiz-pagination">
        <vue-awesome-paginate
          :total-items="totalItems"
          :items-per-page="12"
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
              conversations:[],
              currentPage:1,
              totalItems:""
      }
  },
  created(){
      var user = localStorage.getItem("user");
          if(user !== null){
              user = JSON.parse(user);
              this.auth.isAuthenticated = true;
              this.auth.user = user;
          }
          this.getConversations(1);
  },
  mounted() {
  this.emitter.emit("headerFooter", false);
  console.log('unmounted has been called'); 
  },
  unmounted() {
  this.emitter.emit("headerFooter", false);
  console.log('unmounted has been called'); 
  },
  methods:{
      getConversations(page){
          axios.get(this.selfDomain+'vueseller/seller/conversations?page='+page,{  
          headers: {
                  Authorization: "Bearer " + this.auth.user.access_token,
            }

          })
          .then((response) => {    
              this.conversations = response.data.conversations.data;
              this.totalItems = response.data.totalConversation;
          })
          .catch((err)=>{
              console.log(err)
          })
      },
   
  }
}
</script>

<style>

</style>