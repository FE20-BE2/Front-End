import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Createartikel = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [inputcategory, setInputCategory] = useState("");

  const simpan = () => {
    console.log("simpan");
    console.log(inputcategory);
    axios
      .post(
        "https://api-remedial-production-ecd6.up.railway.app/api/admin/articles",
        {
          title: title,

          content: "Isi konten artikel",

          author: "Andi Cahyono",
          category: inputcategory,
          releaseDate: "2019-02-15",
          timesRead: "15 min",
          articleImg: "",
        },
        {
          headers: {
            Authorization: `Bearer ${"token"}`,
          },
        }
      )

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  async function getCategory() {
    try {
      const response = await axios.get(
        "https://api-remedial-production-ecd6.up.railway.app/api/article-categories"
      );
      console.log(response);
      setCategory(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <div class="row g-3">
        <div class="col">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            defaultValue={title}
            type="text"
            class="form-control"
            placeholder="Title"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Content"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="row g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="row g-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        {category.map((category, index) => (
          <div class="form-check" key={index}>
            <input
              onChange={() => {
                setInputCategory(category._id);
              }}
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`"flexRadioDefault" ${index}`}
            />
            <label
              class="form-check-label"
              htmlFor={`"flexRadioDefault" ${index}`}
            >
              {category.categoryName}
            </label>
          </div>
        ))}
      </div>
      <Button onClick={simpan}>Simpan</Button>
    </div>
  );
};

export default Createartikel;
