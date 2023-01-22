import { createRouter, createWebHistory } from 'vue-router'
//Home Page
import HomeComponent from '../components/HomePageComponent/HomeBanner.vue';
//Important Pages Routes
import AboutUs from '../components/pages/FrontEnd/ImportantPages/AboutUs.vue';
import ContactUs from '../components/pages/FrontEnd/ImportantPages/ContactUs.vue';
import CookiePolicy from '../components/pages/FrontEnd/ImportantPages/CookiePolicy.vue';
import PrivacyPolicy from '../components/pages/FrontEnd/ImportantPages/PrivacyPolicy.vue';
import ReplacementWarrantyPolicy from '../components/pages/FrontEnd/ImportantPages/ReplacementWarrantyPolicy.vue';
import ReturnPolicy from '../components/pages/FrontEnd/ImportantPages/ReturnPolicy.vue';
import SellerPolicy from '../components/pages/FrontEnd/ImportantPages/SellerPolicy.vue';
import SupportPolicy from '../components/pages/FrontEnd/ImportantPages/SupportPolicy.vue';
import Terms from '../components/pages/FrontEnd/ImportantPages/Terms.vue';
import WhyDoYouBelieve from '../components/pages/FrontEnd/ImportantPages/WhyDoYouBelieve.vue';
// Auth Routes
import LoginComponent from '../components/pages/Auth/Login.vue';
import Registration from '../components/pages/Auth/Registration.vue';
import SellerRegistration from '../components/pages/Auth/SellerRegistration.vue';
import affiliateRegistration from '../components/pages/Auth/AffiliateRegistration.vue';
//for resources
import Blog from '../components/pages/FrontEnd/Blog.vue';
import BlogDetails from '../components/pages/FrontEnd/BlogDetails.vue';
import Categories from '../components/pages/FrontEnd/Categories.vue';
import AllJobs from '../components/pages/FrontEnd/AllJobs.vue';
import JobDetails from '../components/ResourceComponents/ProductComponents/detailPages/FreelaneServiceDetails.vue';
import BrandWiseProduct from '../components/ResourceComponents/ProductComponents/BrandWiseProduct.vue';
import AllBrands from '../components/ResourceComponents/ProductComponents/detailPages/AllBrands.vue';
import Shop from '../components/ResourceComponents/ProductComponents/Shop.vue';
import AllShops from '../components/ResourceComponents/ProductComponents/detailPages/AllShops.vue';
// Order Routes
import TrackOrder from '../components/pages/FrontEnd/Order/TrackOrder.vue';
//Product Routes
import SingleProduct from '../components/ResourceComponents/ProductComponents/SingleProduct.vue';
import TodaysBestDeals from '../components/ResourceComponents/ProductComponents/detailPages/TodaysDeal.vue';
import featuredProductsMore from '../components/ResourceComponents/ProductComponents/detailPages/AllFeaturedProduct.vue';
import auctionProducts from '../components/ResourceComponents/ProductComponents/detailPages/AllAuctionProduct.vue';
import AuctionProductsDetails from '../components/ResourceComponents/ProductComponents/AuctionSingleProduct.vue';
import AllFreelanceProducts from '../components/ResourceComponents/ProductComponents/detailPages/AllFreelanceProducts.vue';
import CategoryWiseProduct from '../components/ResourceComponents/ProductComponents/CategoryWiseProduct.vue';
import ShopWiseProduct from '../components/ResourceComponents/ProductComponents/ShopWiseProduct.vue';

// After Authentication Component File
import UserDashboard from '../components/pages/user/UserLayout.vue';
import MyDashboard from '../components/pages/user/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/users/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/users/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/shops/create',
    name: 'sellerRegistration',
    component: SellerRegistration
  },
  {
    path: '/affiliate',
    name: 'affiliateRegistration',
    component: affiliateRegistration
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blogs/:slug?',
    name: 'BlogDetails',
    props:true,
    component: BlogDetails
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/all_jobs',
    name: 'AllJobs',
    component: AllJobs
  },
  {
    path: '/job/:slug?',
    props:true,
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '/track-your-order',
    name: 'trackOrder',
    component: TrackOrder
  },
  {
    path: '/category/:slug',
    name: 'CategoryWiseProduct',
    props: true,
    component: CategoryWiseProduct
  },
  {
    path: '/product/:slug?',
    name: 'singleProduct',
    props:true,
    component: SingleProduct
  },
  {
    path:'/todays_best_deals',
    name: 'todaysBestDealsProducts',
    component: TodaysBestDeals
  },
  {
    path:'/featured_products_more',
    name: 'featuredProductsMore',
    component: featuredProductsMore
  },
  {
    path:'/auction-product',
    name: 'auctionProducts',
    component: auctionProducts
  },
  {
    path:'/auction-products/:slug?',
    props:true,
    name: 'AuctionProductsDetails',
    component: AuctionProductsDetails
  },
  {
    path:'/freelane-products',
    name: 'AllFreelanceProducts',
    component: AllFreelanceProducts
  },
  {
    path: '/search',
    name: 'search',
    props:true,
    component: CategoryWiseProduct
  },
  {
    path: '/search/keyword=:key_slug?',
    name: 'productShop',
    props:true,
    component: CategoryWiseProduct
  },
  {
    path: '/all_shops',
    name: 'AllShops',
    props:true,
    component: AllShops
  },
  {
    path: '/brand/:brand_slug',
    name: 'Brand',
    props: true,
    component: CategoryWiseProduct
  },
  {
    path:'/brands',
    name:'AllBrands',
    component: AllBrands
  },
  {
    path: '/shops/:slug?',
    name: 'Shop',
    props: true,
    component: ShopWiseProduct
  },
 
//important pages
{
  path: '/about-us',
  name: 'About',
  component: AboutUs
},
{
  path: '/Contact-Us',
  name: 'ContactUs',
  component: ContactUs
},
{
  path: '/Cookie-Policy',
  name: 'CookiePolicy',
  component: CookiePolicy
},
{
  path: '/privacy-policy',
  name: 'PrivacyPolicy',
  component: PrivacyPolicy
},

{
  path: '/terms',
  name: 'terms',
  component: Terms
},
{
  path: '/return-policy',
  name: 'ReturnPolicy',
  component: ReturnPolicy
},
{
  path: '/Why-do-you-believe',
  name: 'WhyDoYouBelieve',
  component: WhyDoYouBelieve
},
{
  path: '/seller-policy',
  name: 'SellerPolicy',
  component: SellerPolicy
},
{
  path: '/support-policy',
  name: 'SupportPolicy',
  component: SupportPolicy
},
{
  path: '/replacement-warranty-policy',
  name: 'ReplacementWarrantyPolicy',
  component: ReplacementWarrantyPolicy
},

//After Authentication routes

{
  path:'/dashboard',
  name:'UserDashboard',
  component: UserDashboard
},



]
const router = createRouter({
  scrollBehavior() {
    window.scrollTo(0,0);
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
 
})

export default router