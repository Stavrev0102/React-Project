
import styles from '../Create/Create.module.css';
import * as productService from '../../services/productService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default function Create () {
  const navigate  = useNavigate()
  const {email} = useContext(AuthContext);

  const createSubmitHandler = async(e) => {
    e.preventDefault();
     const productData = Object.fromEntries(new FormData(e.currentTarget));
     productData.ownerEmail = email;
     try { 
       const result =  await productService.create(productData);
       navigate('/catalog')
     } catch (error) {
      throw new Error(error)
     }

  }
    return (
      <section className={styles.create}>
        <div className={styles.form}>
          <h2>ADD product </h2>

          <form className={styles.createForm} onSubmit={createSubmitHandler}>
            <div className={styles.column}>

            <div className={styles.firstColumn}>
             
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                pattern="^.*\S+.*$"
                required
                minLength={4}
                />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                required
                minLength={4}
                />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                required

                />
              <input type="text" name="color" id="color" placeholder="Color" required />
              <input type="text" name="bytes" id="bytes" placeholder="Bytes" required/>
              <input type="text" name="price" id="price" placeholder="Price" required />
            </div>
            <div className={styles.secondColumn}>
              <input
                type="text"
                name="vin-number"
                id="vin-number"
                placeholder="Vin-Number"
                required
                minLength={10}
                />
              <input
                type="text"
                name="size-screen"
                id="size-screen"
                placeholder="Screen Size"
                required
                />
              <input
                type="text"
                name="processor"
                id="processor"
                placeholder="Processor"
                required
                />
              <input type="text" name="released-date" id="date" placeholder="Released Date" />
              <textarea  type="text" name="description" id="description" placeholder="Description" />
            </div>
        </div>
            <button className={styles.submit} type="submit">Add your product </button>

          </form>
        </div>
      </section>
    );
}