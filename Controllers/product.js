import Product from "../models/Product.js";



export const getProduct = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qsearch = req.query.search;
    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: 1 }).limit(7);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else if (qsearch) {
        var regex = new RegExp(qsearch, "i");
        products = await Product.find({
          title: regex,
        }).sort({ title: 1 });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  export const findbyId = async  (req, res) =>{


    try{
      const product = await Product.findById(req.params.id);
      res.status(200).json(product)

    }catch(err){
      res.status(500).json(err)
    }

  }

