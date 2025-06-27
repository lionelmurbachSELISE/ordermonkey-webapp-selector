import { FoodOutlet } from '../types';

const orderUrlBurger = 'https://app.ordermonkey.com/welcome/1a4be37d-d68c-4f28-a0e9-69f45553e92d/e9eb5c7df88e4778af7ed2ddca148e9b';
const orderUrlMomos = 'https://app.ordermonkey.com/welcome/014dac8f-0137-4516-86f9-0c89b956c585/0f35bbf5eb234c29994eeef9b9ab2e7b';
const orderUrlSushi = 'https://app.ordermonkey.com/welcome/f27d06cc-7176-4f13-9006-6a6cc71f17aa/0d1883e5ccd64243a4cd3badb9f1eced';
const orderUrlAsianKitchen = 'https://app.ordermonkey.com/welcome/a5f3b58a-53da-48e3-aeae-e110531d003d/6cb9716a4f9c4e51b16e0c1f45a5cdfe';
const orderUrlSwissKitchen = 'https://app.ordermonkey.com/welcome/b75f0a67-8d15-4a86-8607-ab180910201a/88cc20cda4fd40e095f474aa97af3c30';
const orderUrlTurkishKitchen = 'https://app.ordermonkey.com/welcome/fd9d69e1-9183-42a9-bd83-95ab9bb4d757/f701c2e8283e49d49ef46f0f7cf52f29';
const orderUrlEur = 'https://app.ordermonkey.com/welcome/447b56fb-bf5d-416a-b5a3-205acde45222/25ccdda668e54b39acb59f854c2bf24b';
const orderUrlChf = 'https://app.ordermonkey.com/welcome/6447fb68-86a5-4448-ba4f-a54c1dfd99eb/7d818c40a47e4b428d566ab248b822ec';

export const outlets: FoodOutlet[] = [
  { id: '1', name: 'BURGER', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl: orderUrlBurger },
  { id: '2', name: 'MOMOS', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80', isOpen: true, orderUrl: orderUrlMomos },
  { id: '3', name: 'SUSHI', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlSushi },
  { id: '4', name: 'ASIAN KITCHEN', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1631030576925-18b2ca443738?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlAsianKitchen },
  { id: '5', name: 'SWISS KITCHEN', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1564047570435-580473673f21?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlSwissKitchen },
  { id: '6', name: 'TURKISH KITCHEN', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlTurkishKitchen },
  { id: '7', name: 'OM-DEMO (EUR)', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1646257098224-a3e75d0436c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlEur },
  { id: '8', name: 'OM-DEMO (CHF)', description: '', cuisineType: '', imageUrl: 'https://images.unsplash.com/photo-1670944316338-40c256cb144e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', isOpen: true, orderUrl: orderUrlChf },
]; 