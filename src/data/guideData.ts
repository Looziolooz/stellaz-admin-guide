import React from 'react';
import { Layers, ShoppingBag, Tag, LayoutGrid } from 'lucide-react';

export interface GuideStep {
  title: string;
  description: string;
}

export interface GuideSection {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  videoUrl: string; // Placeholder url
  steps: GuideStep[];
}

export const GUIDE_DATA: GuideSection[] = [
  {
    id: 'subcategory-carousel',
    title: 'Subcategory Carousel',
    icon: LayoutGrid,
    shortDesc: 'A scrollable carousel to navigate specific subcollections or categories visually.',
    videoUrl: '#',
    steps: [
      { title: 'Add Section', description: 'In the Theme Editor, click "Add Section" and search for "Subcategory Carousel" (or "Collection List" if customized).' },
      { title: 'Select Collections', description: 'Click on the blocks inside the section to select the specific collections you want to display (e.g., Lips, Eyes, Face).' },
      { title: 'Visual Settings', description: 'Choose whether to display circular or square images, and enable "Carousel mode" on mobile devices for better UX.' },
      { title: 'Navigation Link', description: 'Ensure each block links correctly to the respective collection page.' }
    ]
  },
  {
    id: 'complementary-products',
    title: 'Complementary Products Block',
    icon: Layers,
    shortDesc: 'Recommend related items directly on your product page to boost discovery and AOV.',
    videoUrl: '#',
    steps: [
      { title: 'Open Theme Editor', description: 'In Shopify Admin, go to Online Store > Themes > Find "Ceramide Hyper" and click "Customize".' },
      { title: 'Select Template', description: 'Click the dropdown at the top of the editor, select "Products", then choose a template (e.g., "Default product").' },
      { title: 'Add Block', description: 'In the left sidebar, inside the "Product Information" section, click "Add Block" and select "Complementary products".' },
      { title: 'Configure Settings', description: 'Check "Enable quick add button" to let customers buy instantly. Note: If a product has variants, it will show "View" and open a modal instead.' },
      { title: 'Assign Products (Crucial)', description: 'This block does NOT auto-populate. You must use the "Shopify Search & Discovery" app to manually link recommendations to each product.' },
      { title: 'Placement Tip', description: 'For best results, drag the block to sit just below the main product description or near the "Add to Cart" area.' }
    ]
  },
  {
    id: 'frequently-bought',
    title: 'Frequently Bought Together',
    icon: ShoppingBag,
    shortDesc: 'Allow customers to add product bundles to the cart.',
    videoUrl: '#',
    steps: [
      { title: 'Placement', description: 'Add a new Section called "Frequently Bought Together" below the main description.' },
      { title: 'Product Selection', description: 'You can set manual products via Metafields or let the algorithm choose based on order history.' },
      { title: 'Button Style', description: 'Customize the "Add All to Cart" button text and background color to make it stand out (use the accent pink).' },
      { title: 'Bundle Discount', description: '(Optional) Enable the automatic 10% discount if they buy the entire bundle from the section settings.' }
    ]
  },
  {
    id: 'media-badges',
    title: 'Media Badges Overlay',
    icon: Tag,
    shortDesc: 'Add "Fixed" or "Dynamic" overlay badges (e.g., Best Seller) to product images via Metafields.',
    videoUrl: '#',
    steps: [
      { title: 'Theme Configuration', description: 'Go to Theme Editor > Theme Settings > "Custom Product Media Badge". Toggle "Show custom badges" to ON.' },
      { title: 'Choose Strategy', description: 'Select "Fixed" to use one global image for all enabled products, or "Dynamic" to allow unique badges per product.' },
      { title: 'Position & Size', description: 'Adjust settings like "Badge Position" (e.g., Bottom Left) and "Badge Size" slider. Use PNGs for transparency.' },
      { title: 'Activate per Product', description: 'In Shopify Admin, go to a Product. Scroll to Metafields and set "Show product media badge" to "True" to display the overlay.' },
      { title: 'Set Dynamic Image', description: 'If using Dynamic mode, upload a unique image to the "Product media Dynamic badge image" metafield for that specific product.' }
    ]
  }
];