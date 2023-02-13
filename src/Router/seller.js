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
  }
   ]