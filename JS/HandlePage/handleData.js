function getAPI (id, object, callback){
    return  fetch(`http://localhost:8000/admin/${object}/edit/${id}`)
    .then(data => data.json()) 
    .then(callback)
}


function handleData(id, type, object){
    document.querySelector(`.modal_${object}--${type}`).style.display = "flex";
    if(type!=="create"){
        getAPI(id, object, (data)=>renderData(data, type, object))
    }
    
}

const renderData = (data, type, object)=>{
    if(object === "user"){
        if(type === "update"){
            document.querySelector(".modal_user--update form input[name='_id']").value = data._id;
            document.querySelector(".modal_user--update form input[name='idOfUser']").value = data.idOfUser;
            document.querySelector(".modal_user--update form input[name='email']").value = data.email;
            document.querySelector(".modal_user--update form input[name='name']").value = data.name;
            document.querySelector(".modal_user--update form input[name='phone']").value = data.phone;
        }
        if(type === "delete"){
            document.querySelector(".modal_user--delete .container_main .message p").textContent = "Do you want to delete user" + data.name + " with account id is: ";
            document.querySelector(".modal_user--delete .container_main .message .id_user").textContent = data._id;
        }
    }

    if(object === "product"){
        if(type === "update" ){
            document.querySelector(".modal_product--update form input[name='_id']").value = data._id;
            document.querySelector(".modal_product--update form input[name='id']").value = data.id;
            document.querySelector(".modal_product--update form input[name='name']").value = data.name;
            document.querySelector(".modal_product--update form input[name='img']").value = data.img;
            document.querySelector(".modal_product--update form input[name='price']").value = data.price;
        }
        if(type === "create" ){
            document.querySelector(".modal_product--create form input[name='id']").value = data.id;
            document.querySelector(".modal_product--create form input[name='name']").value = data.name;
            document.querySelector(".modal_product--create form input[name='img']").value = data.img;
            document.querySelector(".modal_product--create form input[name='price']").value = data.price;
        }
       
        if(type === "delete"){
            document.querySelector(".modal_product--delete .container_main .message p").textContent = "Do you want to delete product" + data.name + " with product id is: ";
            document.querySelector(".modal_product--delete .container_main .message .id_product").textContent = data._id;
        }
    }

}

function handleDelete(object){
    let id = document.querySelector(`.modal_${object}--delete .container_main .message .id_${object}`).textContent;
    if(id === "665b223609250fef02c8787f"){
        alert("Admin Account is not delete!");
    }else{
        location.href = `http://localhost:8000/admin/${object}/edit/${id}/delete`;
    }
    
}

function handleSubmit(object, type){
    if(type==="update"){
        var id = document.querySelector(`.modal_${object}--update form input[name='_id']`).value;
        document.querySelector(`.modal_${object}--update form`).action = `http://localhost:8000/admin/${object}/edit/${id}/update`;
    }
    else{
        document.querySelector(`.modal_${object}--create form`).action = `http://localhost:8000/admin/${object}/edit/create`;
    }
}




function handleCloseModal(modal){
    document.querySelector(modal).style.display = "none";

}