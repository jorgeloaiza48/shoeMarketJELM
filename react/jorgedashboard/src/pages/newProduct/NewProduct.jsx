import "./newproduct.css"


function NewProduct() {
    return (
      <div className='newUser'>
          <h1 className="newUserTitle">New Product</h1>
          <form className="newProduct">
              <div className="newUserItem">
                  <label>Name</label>
                  <input type="text" placeholder="Product Name"></input>
              </div>
              <div className="newUserItem">
                  <label>Stock</label>
                  <input type="email" placeholder="Stock"></input>
              </div>              
                            
              <div className="newUserItem">
                  <label>Active</label>
                  <select ClassName="newUserSelect" name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="userUpdateUpload">
                  <img className='userUpdateImg' src="" alt="" />                  
                  <input type="file" id="file" />
                </div>
              <button className="newUserButton">Create</button>
              
          </form>
      </div>
    )
  }
  
  export default NewProduct