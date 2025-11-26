import React from 'react';
import { Layers, ShoppingBag, Tag, LayoutGrid } from 'lucide-react';

export interface GuideStep {
  title: string;
  description: string;
}

export interface GuideVideo {
  title: string;
  url: string;
}

export interface GuideSection {
  id: string;
  title: string;
  icon: React.ElementType;
  shortDesc: string;
  videos: GuideVideo[];
  steps: GuideStep[];
}

export const GUIDE_DATA: GuideSection[] = [
  {
    id: 'subcategory-carousel',
    title: 'Subcategory Carousel',
    icon: LayoutGrid,
    shortDesc: 'A scrollable carousel to navigate specific subcollections or categories visually.',
    videos: [
      { 
        title: 'Overview & Setup', 
        url: 'https://youtu.be/jmhB9F1P6MU' // Link aggiornato
      } 
    ],
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
    videos: [
      { 
        title: 'Complete Setup Guide', 
        url: 'https://youtu.be/ZLp5Aa8dG4c' // Link aggiornato
      } 
    ],
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
    shortDesc: 'Increase AOV by allowing customers to buy dynamic product bundles with one click.',
    videos: [
      { 
        title: 'Setup Guide', 
        url: 'https://youtu.be/XiLiw6N0cU4' // Link aggiornato
      }
    ],
    steps: [
      { title: 'Add & Position', description: 'In Theme Editor, go to Product template. Click "Add Section", find "Frequently Bought Together", and drag it to your desired position (e.g., after description).' },
      { title: 'Quick Setup (Static)', description: 'For a simple setup: Click the section, scroll to "Products", and select 2-10 items manually. Warning: This displays the SAME bundle for every product.' },
      { title: 'Dynamic Setup: Create Metafield', description: 'Go to Settings > Custom data > Products. Add definition: Name "Bundle Products", Namespace/Key "custom.bundle_products" (CRITICAL), Type "List of products".' },
      { title: 'Dynamic Setup: Assign Bundles', description: 'In Shopify Admin, edit a specific product. Scroll to bottom Metafields, click "Bundle Products", and select the specific items for that bundle.' },
      { title: 'Dynamic Setup: Activate', description: 'Back in Theme Editor > Section Settings. Under "Product Source", check the box "Use product metafield". This tells the section to load unique bundles per product.' },
      { title: 'Customization', description: 'Adjust layout (Width: 1400px), Button style (Pill shape recommended), and enable Toast Notifications for better UX.' },
      { title: 'Troubleshooting', description: 'If you see the same products everywhere, ensure "Use product metafield" is checked. If empty, check you added 2+ products in the metafield.' }
    ]
  },
  {
    id: 'media-badges',
    title: 'Media Badges Overlay',
    icon: Tag,
    shortDesc: 'Add "Fixed" or "Dynamic" overlay badges (e.g., Best Seller) to product images via Metafields.',
    videos: [
      { 
        title: 'Configuration Tutorial', 
        url: 'https://youtu.be/wdb2PmHbk4o' // Link aggiornato
      }
    ],
    steps: [
      { title: 'Theme Configuration', description: 'Go to Theme Editor > Theme Settings > "Custom Product Media Badge". Toggle "Show custom badges" to ON.' },
      { title: 'Choose Strategy', description: 'Select "Fixed" to use one global image for all enabled products, or "Dynamic" to allow unique badges per product.' },
      { title: 'Position & Size', description: 'Adjust settings like "Badge Position" (e.g., Bottom Left) and "Badge Size" slider. Use PNGs for transparency.' },
      { title: 'Activate per Product', description: 'In Shopify Admin, go to a Product. Scroll to Metafields and set "Show product media badge" to "True" to display the overlay.' },
      { title: 'Set Dynamic Image', description: 'If using Dynamic mode, upload a unique image to the "Product media Dynamic badge image" metafield for that specific product.' }
    ]
  }
];