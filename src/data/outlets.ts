import { FoodOutlet } from '../types';

const orderUrl = 'https://app.ordermonkey.com/welcome/6447fb68-86a5-4448-ba4f-a54c1dfd99eb/7d818c40a47e4b428d566ab248b822ec';
const orderUrlEur = 'https://app.ordermonkey.com/welcome/447b56fb-bf5d-416a-b5a3-205acde45222/25ccdda668e54b39acb59f854c2bf24b';

export const outlets: FoodOutlet[] = [
  { id: '1', name: 'WEBSITE DEMO', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl },
  { id: '2', name: 'WEBSITE DEMO (EUR)', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1659270157059-06aa84f64532?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlEur },
  { id: '3', name: 'Momos', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl },
  { id: '4', name: 'Sushi', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl },
  { id: '5', name: 'Pizza', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl },
  { id: '6', name: 'Burger', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl },
  { id: '7', name: 'Turkish', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl },
  { id: '8', name: 'Swiss Kitchen', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1630257574313-9bacc3c521d8?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl },
]; 