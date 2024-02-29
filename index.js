let cardContainer = document.getElementById("card-container");
let allCategory = document.getElementById('btn-container');
let defaultCategoryId = 1000;

let category = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    for(const categoryname of data.data){
        const btncategory = document.createElement('button');
        btncategory.classList = "btn btn-ghost bg-slate-700 text-white text-lg";
        btncategory.innerText = categoryname.category;
        allCategory.appendChild(btncategory);
    }
}

category();

let cardLoader = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    console.log(data.data);
    for(const element of data.data){
        const cardDiv = document.createElement("div");
        cardDiv.classList = 'card w-full bg-base-100 shadow-xl';
        let divInnerHTML = `
        <figure class="overflow-hidden h-72">
        <img class="w-full" src="./images/smells.jpg" alt="Shoes" />
        <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
        </figure>
        <div class="card-body">
            <div class="flex space-x-4 justify-start items-start">
                <div>
                    <img class="w-12 h-12 rounded-full" src="./images/smells.jpg" alt="Shoes" />
                </div>
                <div>
                    <h2 class="card-title">Laugh At My Pain</h2>
                    <div class="flex mt-3">
                        <p class="">Author Name</p>
                        <img class="w-6 h-6" src="./images/verify.png" alt="">
                    </div>
                    <p class="mt-3">100k Views</p>
                </div>
            </div>
        </div>
        
        `
        cardDiv.innerHTML = divInnerHTML;
        cardContainer.appendChild(cardDiv)
    }

}
cardLoader(defaultCategoryId)


























