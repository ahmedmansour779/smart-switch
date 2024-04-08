import CategoryFilterSection from "./CategouryFilterSection";
import FilterBySection from "./FilterBySection";
import PriceRange from "./PriceRange";

export default function FilterApplications() {
    return (
        <div className="flex flex-col gap-2">
            <CategoryFilterSection />
            <hr />
            <PriceRange />
            <hr />
            <FilterBySection />
        </div>
    )
}
