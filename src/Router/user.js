import FollowedShop from '../components/pages/user/UserFollowedShop.vue';
import ShippingInfo from '../components/pages/user/shippingInfo.vue';
import DeliveryInfo from '../components/pages/user/deliveryInfo.vue';


export default [
    {
      path: '/user_followed_shop',
      name: 'FollowedShop',
      component: FollowedShop,
    },

    {
      path: '/shipping_info',
      name: 'ShippingInfo',
      component: ShippingInfo,
    },

    {

      path: '/delivery_info',
      name: 'deliveryInfo',
      component: DeliveryInfo,
    },

    
]