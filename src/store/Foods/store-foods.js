import Vuex from 'vuex';

import { v4 as uuid } from 'uuid';

export default {
    state: {
        foods: [
            {
                id: 1,
                name: "Burger",
                description:
                    "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
                imageUrl: "https://i.imgur.com/0umadnY.jpg",
                rating: 4
            },
            {
                id: 2,
                name: "Pizza",
                description:
                    "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.",
                imageUrl: "https://i.imgur.com/b9zDbyb.jpg",
                rating: 5
            },
            {
                id: 3,
                name: "Sprouts",
                description:
                    "The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.",
                imageUrl: "https://i.imgur.com/RbKjUjB.jpg",
                rating: 1
            }
        ]
    },

    getters: {
        foods(state) {
            return state.foods;
        }
    },

    mutations: {
        deleteFood(state, id) {
            const index = state.foods.findIndex(food => food.id === id);
            state.foods.splice(index, 1);
        },

        addFood(state, food) {
            state.foods.push(food);
        },

        editFood(state, food) {
            const index = state.foods.findIndex(existing => food.id === existing.id);
            state.foods.splice(index, 1, food);
        }
    },

    actions: {
        deleteFood({commit}, id) {
            commit("deleteFood", id);
        },

        addFood({commit}, food) {
            commit('addFood', {...food, id: uuid()});
        },

        editFood({commit}, food) {
            commit('editFood', food);
        }
    }
};
