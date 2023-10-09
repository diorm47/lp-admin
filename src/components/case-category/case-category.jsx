import React, { useState } from "react";
import { InputWithLabel } from "../utils/utils";
import "./case-category.css";

function CaseCategory({ setCategoryModal }) {
  const [value, setValue] = useState("");
  return (
    <div className="modal_template">
      <div className="modal_template_exit">
        <div className="modal_template_title">
          <p>Добавить категорию кейса</p>
        </div>
        <svg
          onClick={() => setCategoryModal(false)}
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="#000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M640.233 206.9C646.305 200.613 649.665 192.193 649.589 183.453C649.513 174.713 646.007 166.353 639.827 160.173C633.647 153.993 625.286 150.487 616.547 150.411C607.807 150.335 599.387 153.695 593.1 159.767L400 352.867L206.9 159.767C200.613 153.695 192.193 150.335 183.453 150.411C174.713 150.487 166.353 153.993 160.173 160.173C153.992 166.353 150.487 174.713 150.411 183.453C150.335 192.193 153.695 200.613 159.767 206.9L352.867 400L159.767 593.1C156.583 596.175 154.044 599.853 152.297 603.92C150.55 607.987 149.63 612.361 149.592 616.787C149.553 621.213 150.397 625.602 152.073 629.698C153.749 633.795 156.224 637.517 159.353 640.647C162.483 643.776 166.205 646.251 170.301 647.927C174.398 649.603 178.787 650.447 183.213 650.408C187.639 650.37 192.013 649.45 196.08 647.703C200.147 645.956 203.825 643.417 206.9 640.233L400 447.133L593.1 640.233C599.387 646.305 607.807 649.665 616.547 649.589C625.286 649.513 633.647 646.008 639.827 639.827C646.007 633.647 649.513 625.287 649.589 616.547C649.665 607.807 646.305 599.387 640.233 593.1L447.133 400L640.233 206.9Z"
          ></path>
        </svg>
      </div>

      <div className="modal_template_content">
        <div className="add_employe_input">
          <InputWithLabel
            id="case_category"
            label="Категория"
            value={value}
            event={setValue}
          />
        </div>
        <button className="main_btn modal_btn">Сохранить</button>
      </div>
    </div>
  );
}

export default CaseCategory;
