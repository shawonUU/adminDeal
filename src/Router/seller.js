import SellerLayout from '../components/pages/sellers/SellerLayout.vue';
const auth = (to, from, next) => {
  var user = localStorage.getItem("user");
  if (user !== null) {
    next();
  } else {
    next('/');
  }
}
export default [
  {
    path:'/seller/dashboard',
    name:'SellerDashboard',
    component: SellerLayout,
    props: () => ({ componentName: 'Dashboard' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/products',
    name:'SellerProducts',
    component: SellerLayout,
    props: () => ({ componentName: 'SellerProducts' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/product/create',
    name:'createSellerProducts',
    component: SellerLayout,
    props: () => ({ componentName: 'createSellerProducts' }),
    beforeEnter: auth,
  },
   {
    path:'/seller/product/edit',
    name:'editSellerProducts',
    component: SellerLayout,
    props: () => ({ componentName: 'editSellerProducts' }),
    beforeEnter: auth,
  },

  {
    path:'/seller/reviews',
    name:'productReviews',
    component: SellerLayout,
    props: () => ({ componentName: 'productReviews' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/conversations',
    name:'sellerConversation',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerConversation' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/jobs',
    name:'sellerJobs',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerJobs' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/seller-packages',
    name:'sellerPackages',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerPackages' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/packages-payment-list',
    name:'sellerPackagesPaymentList',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerPackagesPaymentList' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/coupon',
    name:'sellerCoupons',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerCoupons' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/coupon/create',
    name:'sellerCouponCreate',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerCouponCreate' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/orders',
    name:'sellerOrder',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerOrder' }),
    beforeEnter: auth,
  },
  {
    path:'/seller/orders-details/:id?',
    name:'sellerOrderDetails',
    component: SellerLayout,
    props: () => ({ componentName: 'sellerOrderDetails' }),
    beforeEnter: auth,
  }
   ]