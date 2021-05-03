const db=firebase.firestore();
const table=document.querySelector('#tbresult');
const form =document.querySelector('#addForm');
/*
db.collection('users').get().then((snapshot)=>{
   snapshot.forEach((doc)=>{
       showData(doc)
      // console.log(doc.data());
   })
});*/

/*
db.collection('users').where('city','==','cm').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        showData(doc)
    })
 });

  db.collection('users').where('age','>','35').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        showData(doc)
    })
 });
 */

 //desc asc
 db.collection('users').orderBy('age','asc').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
        showData(doc)
    })
 });



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //console.log(form.name.value);
    db.collection('users').add({
        name:form.name.value,
        age:form.age.value,
        city:form.city.value,
    });
    form.name.value='';
});

function showData(doc){
    let row=table.insertRow(-1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=doc.data().name;
    cell2.innerHTML=doc.data().city;
    cell3.innerHTML=doc.data().age;

    let btn=document.createElement('button');
    btn.textContent="delete data";
    btn.setAttribute('class','btn btn-danger');
    btn.setAttribute('data-id',doc.id);
    cell4.appendChild(btn);
    btn.addEventListener('click',(e)=>{
        let id=e.target.getAttribute('data-id');
        db.collection('users').doc(id).delete();
    })
}

//update data
//db.collection('users').doc('bVS2yQ9PR7wFYRmgW81X').update({name:'Baney'})