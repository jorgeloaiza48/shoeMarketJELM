import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import useAllProducts from "../../Hooks/useAllProducts"
import "./list.css"



const ListProducts = () => {

  const { dataProducts } = useAllProducts("http://localhost:4000/api/products")
  const { products, countByCategory, isLoadingProducts } = !!dataProducts && dataProducts;
  const urlImgProducto = "http://localhost:4000/img/products/"



  
  






  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
        <table className="table d-flex">
        <div className='table-div'>
            <th>ID</th>
            {
              products ?
                (
                  products.map(product => {
                    return (
                      <tr className='list-product__tr' key={product.id}>
                        {product.id}
                      </tr>
                    )
                  })
                ) :
                (
                  <div class="spinner-border text-danger loading" role="status">
                  <span class="visually-hidden ">Loading...</span>
                </div>
              
                )

            }
          </div>
          <div>
            <th>Nombre</th>
            {
              products ?
                (
                  products.map(product => {
                    return (
                      <tr className='list-product__tr' key={product.id}>
                        {product.name}
                      </tr>
                    )
                  })
                ) :
                (
                  <div class="spinner-border text-danger loading" role="status">
                  <span class="visually-hidden ">Loading...</span>
                </div>
                )

            }
          </div>
          <div>

            <th>Categoria</th>
            {
              products ?
                (
                  products.map(product => {
                    return (
                      <tr className='list-product__tr' key={product.id}>
                        {product.categorias.name}
                      </tr>
                    )
                  })
                ) :
                (
                  <div class="spinner-border text-danger loading" role="status">
                  <span class="visually-hidden ">Loading...</span>
                </div>
                )

            }
          </div>
          <div>

            <th>Foto</th>
            {
              products ?
                (
                  products.map(product => {
                    return (
                      <tr className='list-product__tr' key={product.id}>
                        <img className='list-product__img' src={urlImgProducto + product.img} alt="" />
                      </tr>
                    )
                  })
                ) :
                (
                  <div class="spinner-border text-danger loading" role="status">
                  <span class="visually-hidden ">Loading...</span>
                </div>
                )

            }
          </div>
          <div>

            <th>Editar</th>
            <tr className='list-product__tr' >
            <button
            className=''
            
            >
              Editar

            </button>
            </tr>
          </div>
          <div>

            <th>Eliminar</th>
            <tr className='list-product__tr' >
            <button
            className='btn btn-danger'
            
            >
              Eliminar

            </button>
            </tr>
          </div>










        </table>



      </div>
    </div >
  )
}

export default ListProducts