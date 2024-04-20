import CategoryFilterSection from "./CategouryFilterSection";
import FilterBySection from "./FilterBySection";
import PriceRange from "./PriceRange";

export default function FilterApplications() {
    return (
        <div className="md:flex flex-col gap-2 hidden">
            <CategoryFilterSection />
            <hr />
            <PriceRange />
            <hr />
            <FilterBySection />
        </div>
    )
}
