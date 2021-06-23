
# Eatabel Server

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#future-improvements">Future Improvements</a></li>
  </ul>
</details>


## About
This project works to serve the Eatabel Frontend package. The Eatabel Server acts as a relay between the Edamam API (https://developer.edamam.com), and the Eatabel Frontend. 

## Built with

- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)

## Getting Started
1. Copy `./foodAPI/config.example.js` and edit to include the pertinent App ID and API Key from the Edamam API.
2. `npm install`
3. `npm start`

## API Documentation
### Search by UPC

- GET `/searchUPC/:upc`

**Form Data:**

- `upc`: UPC of product

**Success Status Code:** `200`

**Returns:** JSON
<details> <summary>Example Output</summary>

```json
{
  "text": "upc:41390000027",
  "parsed": [
    
  ],
  "hints": [
    {
      "food": {
        "foodId": "food_b6m5wrqb3dakkiackjh78aztubzt",
        "label": "Kikkoman, Soy Sauce",
        "nutrients": {
          "ENERC_KCAL": 67,
          "FAT": 0,
          "CHOCDF": 0,
          "PROCNT": 13.329999923706055,
          "NA": 6133
        },
        "brand": "Kikkoman",
        "category": "Packaged foods",
        "categoryLabel": "food",
        "foodContentsLabel": "WATER; WHEAT; SOYBEANS; SALT; SODIUM BENZOATE: LESS THAN 1/10 OF 1% AS A PRESERVATIVE.",
        "image": "https://www.edamam.com/food-img/2aa/2aac7679ba2c94d39d5e44d05977a10b.jpg",
        "servingSizes": [
          {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
            "label": "Milliliter",
            "quantity": 15
          },
          {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
            "label": "Tablespoon",
            "quantity": 1
          }
        ],
        "servingsPerContainer": 0.9586114185513803
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 14.786764781
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 283.49523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 14.786764781
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_milliliter",
          "label": "Milliliter",
          "weight": 0.9857843187333334
        }
      ]
    }
  ]
}
```
</details>

### Search by Keyword

- GET `/search/:query`

**Form Data:**

- `query`: Keyword

**Success Status Code:** `200`

**Returns:** JSON
<details> <summary>Example Output</summary>

```json
{
  "text": "Soy sauce",
  "parsed": [
    {
      "food": {
        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
        "label": "Soy Sauce",
        "nutrients": {
          "ENERC_KCAL": 53,
          "PROCNT": 8.14,
          "FAT": 0.57,
          "CHOCDF": 4.93,
          "FIBTG": 0.8
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
      }
    }
  ],
  "hints": [
    {
      "food": {
        "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
        "label": "Soy Sauce",
        "nutrients": {
          "ENERC_KCAL": 53,
          "PROCNT": 8.14,
          "FAT": 0.57,
          "CHOCDF": 4.93,
          "FIBTG": 0.8
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 16
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon",
          "label": "Teaspoon",
          "weight": 5.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 16
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 255
        }
      ]
    }
  ],
  "_links": {
    "next": {
      "title": "Next page",
      "href": "https://api.edamam.com/api/food-database/v2/parser?session=42&app_id=a8573267&app_key=a018ca4326b8140dff38278ec074d325&ingr=Soy+sauce"
    }
  }
}
```
</details>

## Future Improvements
Imminently: Our goals include moving over to using multiple API's, and caching results in order to reduce the number of external API calls necessary. Additionally, we would like to focus on gathering and collecting health data, to also allow Eatabel to give users more insight into their eating habits.

Down the Road: Our goals include sourcing product images from multiple sources. The Edamam API has many missing images, therefore we would like to use multiple sources to provide product photos.

Ultimately: Our goals include building our Database and API, allowing for user submission of photos/product data, in order to reduce the reliance on external API's.
