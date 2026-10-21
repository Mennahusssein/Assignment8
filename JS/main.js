
const recipes = [
    {
        title: "Shrimp Scampi",
        subtitle: "Garlicky shrimp in white wine butter sauce",
        image: "./images/shrimp.avif",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        rating: "4.8",
        reviews: "(356 reviews)",

        ingredients: [
            '400g large shrimp, peeled',
            '300g linguine pasta',
            '6 cloves garlic, minced',
            '1/2 cup white wine',
            '4 tablespoons butter',
            '2 tablespoons olive oil',
            'Fresh parsley, chopped',
            'Lemon juice and zest',
            'Red pepper flakes'
        ],

        instructions: [
            'Cook linguine according to package directions. Reserve 1 cup pasta water.',
            'Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.',
            'Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.',
            'Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.',
            'Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.',
            'Garnish with parsley, lemon zest, and serve immediately.'
        ],

        nutrition: [
            { name: 'Calories', val: '520 kcal' },
            { name: 'Protein', val: '36 g' },
            { name: 'Carbohydrates', val: '54g' },
            { name: 'Fat', val: '18g' },
            { name: 'Fiber', val: '3g' },
            { name: 'Sodium', val: '620mg' }
        ],

        tips: [
            { title: "Don't overcook shrimp - they cook very quickly" },
            { title: 'Use good quality white wine for best flavor' },
            { title: 'Toss pasta in sauce for maximum flavor absorption' },
            { title: 'Add extra lemon for bright, fresh taste' }
        ]
    },

    {
        title: "Thai Green Curry",
        subtitle: "Vibrant and aromatic curry with vegetables and coconut milk",
        image: "./images/curry.avif",
        prepTime: "15 min",
        cookTime: "25 min",
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Asian",
        rating: "4.7",
        reviews: "(312 reviews)",

        ingredients: [
            '2 tablespoons green curry paste',
            '400ml coconut milk',
            '300g chicken breast, sliced',
            '1 red bell pepper, sliced',
            '100g green beans',
            '1 eggplant, cubed',
            '2 tablespoons fish sauce',
            '1 tablespoon palm sugar',
            'Fresh Thai basil leaves'
        ],

        instructions: [
            'Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.',
            'Add half the coconut milk and stir to combine with the curry paste.',
            'Add sliced chicken and cook until no longer pink, about 5 minutes.',
            'Add remaining coconut milk, vegetables, fish sauce, and palm sugar.',
            'Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.',
            'Stir in fresh Thai basil leaves. Serve hot with jasmine rice.'
        ],

        nutrition: [
            { name: 'Calories', val: '420 kcal' },
            { name: 'Protein', val: '26 g' },
            { name: 'Carbohydrates', val: '22g' },
            { name: 'Fat', val: '26g' },
            { name: 'Fiber', val: '5g' },
            { name: 'Sodium', val: '890mg' }
        ],

        tips: [
            { title: 'Adjust spice level by using more or less curry paste' },
            { title: 'Add vegetables in stages based on cooking time needed' },
            { title: 'Fresh Thai basil is essential for authentic flavor' },
            { title: 'Use full-fat coconut milk for richest, creamiest sauce' }

        ]
    },

    {
        title: "Caesar Salad",
        subtitle: "Classic salad with crispy romaine and creamy dressing",
        image: "./images/salad.avif",
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        rating: "4.4",
        reviews: "(198 reviews)",

        ingredients: [
            '1 large romaine lettuce',
            '1/2 cup Caesar dressing',
            '1/2 cup parmesan cheese, shaved',
            '1 cup croutons',
            '2 anchovy fillets (optional)',
            'Lemon wedges',
            'Black pepper'
        ],

        instructions: [
            'Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.',
            'Place lettuce in a large salad bowl.',
            'Add Caesar dressing and toss until evenly coated.',
            'Add croutons and half the parmesan cheese. Toss gently.',
            'Top with remaining parmesan shavings and anchovies if using.',
            'Serve immediately with lemon wedges and fresh black pepper.'
        ],

        nutrition: [
            { name: 'Calories', val: '320 kcal' },
            { name: 'Protein', val: '12 g' },
            { name: 'Carbohydrates', val: '18g' },
            { name: 'Fat', val: '22g' },
            { name: 'Fiber', val: '3g' },
            { name: 'Sodium', val: '680mg' }
        ],

        tips: [
            { title: 'Use cold, crisp lettuce for best texture' },
            { title: 'Make homemade croutons for better flavor' },
            { title: 'Add grilled chicken for a complete meal' },
            { title: 'Don\'t dress salad until ready to serve' }


        ]
    }
];



var currentRecipe = 0;

var tabs = document.querySelectorAll(".nav-tab-item");

function setText(id, text) {
    document.getElementById(id).textContent = text;
}

function showTab(tabName) {
    var recipe = recipes[currentRecipe];
    var items = recipe[tabName];
    var content = "";

    for (var i = 0; i < items.length; i++) {
        var text = items[i];

        if (tabName === "nutrition") {
            text = text.name + ": " + text.val;
        }

        if (tabName === "tips") {
            text = text.title;
        }

        if (tabName === "ingredients") {
            content += `
                <div class="ingredient mb-3">
                    <div class="ingredient-number">${i + 1}</div>
                    <p class="ingredient-list">${text}</p>
                </div>
            `;
        }

        else if (tabName === "instructions") {
            content += `
                <div class="step-item mb-3">
                    <div class="step-number">${i + 1}</div>
                    <p class="step-text">${text}</p>
                </div>
            `;
        }


        else if (tabName === "nutrition") {
            var icons = [
                "fa-fire",
                "fa-dumbbell",
                "fa-wheat-awn",
                "fa-droplet",
                "fa-seedling",
                "fa-cube"
            ];
            var colors = [
                "#F54900",
                "#155DFC",
                "#D08700",
                "#E7000B",
                "#00A63E",
                "#E60076"
            ];

            var parts = text.split(":");
            var name = parts[0].trim();
            var val = parts[1].trim();


            content += `
    <div class="col-md-6 mb-3">
        <div class="nutrition-card">
            <div class="nutrition-icon"
                 style="color: ${colors[i]};
                        background-color: ${colors[i]}15;">

                <i class="fa-solid ${icons[i]}"></i>

            </div>

            <div class="nutrition-info">
                <span class="nutrition-title">${name}</span>
                <span class="nutrition-value">${val}</span>
            </div>
        </div>
    </div>
`;

        }


        else if (tabName === "tips") {
            content += `
                <div class="tip-card mb-3">
                    <p class="tip-text">${text}</p>
                </div>
            `;
        }
    }

    if (tabName === "nutrition") {
        document.getElementById("tabContentBox").innerHTML =
            `<div class="row g-3">${content}</div>`;
    } else {
        document.getElementById("tabContentBox").innerHTML =
            `<div class="d-flex flex-column gap-2">${content}</div>`;
    }

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].getAttribute("data-tab") === tabName) {
            tabs[i].classList.add("active");
        }
    }
}

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
        var tabName = this.getAttribute("data-tab");
        showTab(tabName);
    };
}

function updateRecipe() {
    var recipe = recipes[currentRecipe];

    setText("recipeTitle", recipe.title);
    setText("recipeSubtitle", recipe.subtitle);
    setText("prepTime", recipe.prepTime);
    setText("cookTime", recipe.cookTime);
    setText("servingsVal", recipe.servings);
    setText("difficultyBadge", recipe.difficulty);
    setText("categoryBadge", recipe.category);
    setText("ratingVal", recipe.rating);
    setText("reviewCount", recipe.reviews);

    document.getElementById("recipeImg").src = recipe.image;
    document.getElementById("recipeImg").alt = recipe.title;

    showTab("ingredients");
}

document.getElementById("tryAnotherBtn").onclick = function () {
    currentRecipe++;

    if (currentRecipe >= recipes.length) {
        currentRecipe = 0;
    }

    updateRecipe();
};

updateRecipe();

