import { CATEGORIES } from "../../demodata";
import Category from "./Category";

const Care = () => {
  return (
    <div className="border-t-2 border-lightest-gray w-full mt-[10px] py-[10px]">
      <div className="flex justify-between items-center py-3">
        <h1 className="text-dark-gray text-headline">Psersonal Care</h1>
        <Category />
      </div>
      <ul>
        {CATEGORIES.map(({ id, formartedTitle }, index) => (
          <li key={index} className="border-lightest-gray w-full">
            <h1 className="text-secondary text-subhead font-bold border-b-[0.5px] py-2 pl-4">
              {formartedTitle}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Care;
