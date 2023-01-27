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
        <!-- <templete v-if="conversation.receiver != null && conversation.sender != null"> -->
            <li class="list-group-item px-0">
              <div class="row gutters-10">
                <div class="col-auto">
                  <div class="media">
                    <!-- <span class="avatar avatar-sm flex-shrink-0">
                      @if (Auth::user()->id == $conversation->sender_id) 
                      <img @if ($conversation->receiver->avatar_original == null) src="{{ static_asset('assets/img/avatar-place.png') }}" 
                      @else src="{{ uploaded_asset($conversation->receiver->avatar_original) }}" 
                      @endif onerror="this.onerror=null;this.src='{{ static_asset('assets/img/avatar-place.png') }}';">
                      @else
                        <img @if ($conversation->sender->avatar_original == null) src="{{ static_asset('assets/img/avatar-place.png') }}" 
                        @else src="{{ uploaded_asset($conversation->sender->avatar_original) }}"
                          @endif class="rounded-circle" onerror="this.onerror=null;this.src='{{ static_asset('assets/img/avatar-place.png') }}';"> 
                          @endif 
                      </span> -->
                  </div>
                </div>
                <div class="col-auto col-lg-3">
                  <p> 
                      <!-- @if (Auth::user()->id == $conversation->sender_id) -->
                      <!-- <span v-if="auth.user.id == conversation.sender_id" class="fw-600">{{ conversation.receiver_name }}</span>
                      <span class="fw-600">{{ conversation.sender_name }}</span>  -->
                      <!-- @endif  -->
                      <br>
                    <span class="opacity-50">
                      <!-- conversation->messages->last()->created_at -->
                    </span>
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
                            <!-- @if ((Auth::user()->id == $conversation->sender_id && $conversation->sender_viewed == 0) || (Auth::user()->id == $conversation->receiver_id && $conversation->receiver_viewed == 0))  -->
                            <!-- <span class="badge badge-inline badge-danger">New</span>  -->
                            <!-- @endif -->
                          </h6>
                        </div>
                      </div>
                      <p class="mb-0 opacity-50">
                        <!-- conversation->messages->last()->message -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li> 
        <!-- </templete> -->
    </ul>
  </div>
</div>
<div class="aiz-pagination">
  <!-- {{ $conversations->links() }} -->
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
        page: 1,
        conversations:{},
      }
    },
    created(){
      var user = localStorage.getItem("user");
        if(user !== null){
            user = JSON.parse(user);
            this.auth.isAuthenticated = true;
            this.auth.user = user;
            this.getConversations();
        }
    },
    methods:{
      getConversations(){
        axios.get("http://localhost:8080/vueweb/conversations?page=1", {
            headers: {
              token: this.auth.user.access_token,
              Authorization: "Bearer " + this.auth.user.access_token,
            }
        }).then(res=>{
            this.conversations =  res.data.conversations.data;
            console.log(this.conversations);
        }).catch(err=>{

        });
      }
    }
}
</script>

<style>

</style>