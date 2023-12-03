let library = [
    book1 ={
        title: "Harry Potter",
        author: "J.K.Rowling",
        publication_year: "2005",
        genre: "Adventure"
    }
]


while(true){
    console.log(`1. Update Book \n2. Search Book \n3. Display All Books \n4. Delete Book \n5. Update book \n6. Exit`)
    n = Number.parseInt(prompt("Enter your choice"))
    if(n==1){
        add_book()
    }
    else if(n==2){
        search_book()
        break
    }
    else if(n==3){
        display_all_book()
    }
    else if(n==4){
        delete_book()
    }
    else if(n==5){
        update_book()
    }
    else if(n==6){
        break
    }
    else{
        console.log("Invalid Input")
        break
    }
}

function add_book(){
    book2 = {
        title: prompt("Enter title of book"),
        author: prompt("Enter author's name"),
        publication_year: prompt("Enter publication year of book"),
        genre: prompt("Enter genre of book")
    }
    library.push(book2)
}

function search_book(){
    search = prompt("Enter title of book").toLowerCase()
    value1 = Object.values(book1)[0].toLowerCase()
    if(search == value1){
        console.log(book1)
    }
    else{
        console.log("Enter valid name")
    }
}

function display_all_book(){
    console.log(library)
}

function delete_book(){
    search = prompt("Enter title of book").toLowerCase()
    value1 = Object.values(book1)[0].toLowerCase()
    if(search == value1){
        delete library[0]
    }
    else{
        console.log("Enter valid name")
    }
}

function update_book(){
    book1['title'] = prompt("Enter title of book")
    book1['author'] = prompt("Enter author's name")
    book1['publication_year'] = prompt("Enter publication year of book")
    book1['genre'] = prompt("Enter genre of book")
}



