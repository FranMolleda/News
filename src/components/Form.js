import React from "react";
import useSelect from "../hooks/useSelect";
import styles from "./Form.module.css";

const Form = () => {
  //API
  //http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=3fcdc1471e344ff7b83e2aa6a80660ab

  const CATEGORIES = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
  ];

  //Utilizamos custom hook
  const [selectstate, NewsSelection] = useSelect("general", CATEGORIES);
  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Find News by Category</h2>
          <NewsSelection />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles["btn-block"]} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
