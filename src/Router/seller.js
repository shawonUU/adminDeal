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
  }
   ]