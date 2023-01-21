let todoListReference = [];

//Skapar aktiviteter till min lista
function createActivity()
{
    if(document.querySelector(".add_form input").value.length == 0){
        alert("du har inte skrivit något!")
    }
    else{

        const RemoveBtnText = "Ta Bort";

        //Hämtar Värdena från våra input taggar
        let inputActivity = document.querySelector("#inputActivity").value;
        let selectCategory = document.querySelector("#selectCategory").value;
        let dateTime = document.querySelector("#dateTime").value;
    
        //hämtar referens till <ul class="todo_list">
        let todoListEl = document.querySelector(".todo_list");
    
        //Skapar "container/todorad"
        let todoListItems = document.createElement("ul");
        todoListItems.classList.add("list_item")
        todoListEl.appendChild(todoListItems);
    
        //skapar elementen som ska vara i todolistan
        let todoListItemActivity = document.createElement("li");
        todoListItemActivity.id = "list_item_activity";
        todoListItemActivity.innerText = inputActivity;

        let todoListItemSelectCategory = document.createElement("li");
        todoListItemSelectCategory.id = "list_item_selectedCategory";
        todoListItemSelectCategory.innerText = selectCategory;

        let todoListItemdateTime = document.createElement("li");
        todoListItemdateTime.innerText = dateTime;
    
        let todoListItemRemoveBtn = document.createElement("button");
        todoListItemRemoveBtn.innerText = RemoveBtnText;
        todoListItemRemoveBtn.onclick = removeActivity;
    
        //Lägg till Subelementet till Grundelementet
        todoListItems.appendChild(todoListItemActivity);
        todoListItems.appendChild(todoListItemdateTime);
        todoListItems.appendChild(todoListItemSelectCategory);
        todoListItems.appendChild(todoListItemRemoveBtn);
        
        todoListReference = Array.from(document.querySelectorAll(".list_item"));
        const inputs = document.querySelectorAll("#inputActivity");
    
        inputs.forEach(input => {
            input.value = '';
        })

        /*let current_activity = document.querySelectorAll(RemoveBtnText);
        for(let i=0; i<current_activity.length; i++){
            current_activity[i] = removeActivity()
            
        }*/

    }
}

function removeActivity()
{
    this.parentNode.remove();
    todoListReference = Array.from(document.querySelectorAll(".list_item"));
}

function filterCategories(categoryValue) {

    todoListReference.forEach((listCategory) => {

        const categoryName = listCategory.querySelector("#list_item_selectedCategory").innerText;
        if(categoryName.indexOf(categoryValue) < 0)
        {
            listCategory.classList.add("hide");
        }
        else
        {
            listCategory.classList.remove("hide");
        }

    });

}


/*function filterCategories()
{
    if(document.getElementById("category2").checked) 
    {
        console.log("kategori 2");
       
    } 
    else if (document.getElementById("category3").checked) 
    {
        console.log("kategori 3");
    }
    else
    {
        console.log("annat");
        
    }
    /*var radio = document.getElementsByName('radio_category');
    for(i = 0; i < radio.length; i++) {
        if(radio[i].checked)
        alert(radio[i].value);
    }*/

/*const radioButtons = document.querySelectorAll('input[name="radio_category"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', filterCategories());
});*/


function filterActivities(filterValue)
{
    //let todoListElements = document.querySelectorAll(".list_item");

    todoListReference.forEach((listItem) => {

        const itemName = listItem.querySelector("#list_item_activity").innerText;
        if(itemName.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        }

    });

}
