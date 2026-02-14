import ComboItem from "@/components/ComboItem";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
interface PageProps {
    params: Promise<{
        ids?: string[]
    }>
}
const items = [
    {
        id: 1,
        image: "/food/image1.png",
        title: "Current Noodles & Non-Veg Combo ( 8-10 People )",
        price: "3999",
    },
    {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl5jrFc3LzhI0kHV3SQm5E-FfWIOTW4KReA&s",
        title: "Veg Combo Meal ( 4-6 People )",
        price: "2499",
    },
    {
        id: 3,
        image: "https://tkcfoods.com/cdn/shop/products/vegcombo_1080x.png.jpg?v=1626874169",
        title: "Seafood Special Combo ( 6-8 People )",
        price: "4999",
    },
    {
        id: 4,
        image: "https://www.recipetineats.com/tachyon/2023/12/Seafood-Platter_Sony-5.jpg",
        title: "Family Combo ( 10-12 People )",
        price: "6999",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqTeD4KEZ_ahv2l9C1QCzCwHAPaQA95g4yA&s",
        title: "Vegetarian Feast Combo ( 8-10 People )",
        price: "3599",
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqHH38CajH9gdcosD9hZHslFUZOduck3Lg&s",
        title: "Mixed Combo Meal ( 6-8 People )",
        price: "2999",
    },
    {
        id: 7,
        image: "https://www.recipetineats.com/tachyon/2023/12/Seafood-Platter_Sony-5.jpg",
        title: "Family Combo ( 10-12 People )",
        price: "6999",
    },
    {
        id: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqTeD4KEZ_ahv2l9C1QCzCwHAPaQA95g4yA&s",
        title: "Vegetarian Feast Combo ( 8-10 People )",
        price: "3599",
    },
    {
        id: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqHH38CajH9gdcosD9hZHslFUZOduck3Lg&s",
        title: "Mixed Combo Meal ( 6-8 People )",
        price: "2999",
    },
    {
        id: 10,
        image: "/food/image1.png",
        title: "Current Noodles & Non-Veg Combo ( 8-10 People )",
        price: "3999",
    },
    {
        id: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyl5jrFc3LzhI0kHV3SQm5E-FfWIOTW4KReA&s",
        title: "Veg Combo Meal ( 4-6 People )",
        price: "2499",
    },
    {
        id: 12,
        image: "https://tkcfoods.com/cdn/shop/products/vegcombo_1080x.png.jpg?v=1626874169",
        title: "Seafood Special Combo ( 6-8 People )",
        price: "4999",
    },
    {
        id: 13,
        image: "https://www.recipetineats.com/tachyon/2023/12/Seafood-Platter_Sony-5.jpg",
        title: "Family Combo ( 10-12 People )",
        price: "6999",
    },
    {
        id: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqTeD4KEZ_ahv2l9C1QCzCwHAPaQA95g4yA&s",
        title: "Vegetarian Feast Combo ( 8-10 People )",
        price: "3599",
    },
    {
        id: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqHH38CajH9gdcosD9hZHslFUZOduck3Lg&s",
        title: "Mixed Combo Meal ( 6-8 People )",
        price: "2999",
    },
    {
        id: 16,
        image: "https://www.recipetineats.com/tachyon/2023/12/Seafood-Platter_Sony-5.jpg",
        title: "Family Combo ( 10-12 People )",
        price: "6999",
    },
    {
        id: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqTeD4KEZ_ahv2l9C1QCzCwHAPaQA95g4yA&s",
        title: "Vegetarian Feast Combo ( 8-10 People )",
        price: "3599",
    },
    {
        id: 18,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCqHH38CajH9gdcosD9hZHslFUZOduck3Lg&s",
        title: "Mixed Combo Meal ( 6-8 People )",
        price: "2999",
    }
];
export default async function FilterPage({ params }: PageProps) {
    const { ids } = await params

    return (
        <div className="flex h-full gap-4">
            {/* LEFT FILTER SECTION */}
            <aside className="hidden md:flex  border p-4 rounded-md flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-extrabold">FILTER</span>
                    <button className="text-sm text-muted-foreground hover:underline">
                        Clear Filter
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 space-y-2 overflow-y-auto hide-scrollbar">
                    {/* Shadcn Dropdown used to make */}
                    {[
                        "All Categories",
                        "Momo",
                        "Chowmein",
                        "Pizza",
                        "Burger",
                        "Fried Rice",
                        "Pasta",
                        "Sandwich",
                        "Soup",
                        "Snacks",
                        "Drinks",
                        "Dessert",
                        "BBQ",
                        "Salad",
                        "Rolls",
                        "Thukpa",
                        "Sekuwa",
                        "Noodles",
                        "Biryani",
                        "Ice Cream",
                        "Coffee",
                        "Tea",
                        "Juice",
                        "Smoothie",
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Checkbox />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-2 pt-2 border-t">
                    <span className="font-medium">Prices (Rs.)</span>
                    <div className="flex items-center gap-2">
                        <Input placeholder="Min" />
                        <span>:</span>
                        <Input placeholder="Max" />
                    </div>
                </div>
            </aside>

            {/* RIGHT CONTENT SECTION */}
            <main className="w-full overflow-y-auto hide-scrollbar space-y-2">
                <div className="flex justify-between items-center">
                    <span className="hidden md:flex">Sort By</span>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="px-3 py-2 border rounded-md">
                            <div className="flex items-center gap-4 cursor-pointer">
                                <span>Default</span>
                                <ChevronDown />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Default</DropdownMenuItem>
                            <DropdownMenuItem>High to Low</DropdownMenuItem>
                            <DropdownMenuItem>Low to High</DropdownMenuItem>
                            <DropdownMenuItem>Popularity</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <span className="md:hidden cursor-pointer"><SlidersHorizontal /></span>
                </div>

                <div className="grid custom-grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {items.map((item) => (
                        <ComboItem key={item.id} item={item} className="w-full" />
                    ))}
                </div>
            </main>
        </div>
    )
}
