import App from '@/App.vue';
import {filmsData} from './films.js';
import {shallowMount} from '@vue/test-utils';
import fetch from 'fetch-mock';


describe('App', () => {

  let wrapper;

  beforeEach(async () => {
    fetch.once('', JSON.stringify(filmsData));
    wrapper = shallowMount(App);
    await wrapper.vm.$nextTick()
    fetch.reset()
  })
  it ('should have 2 films', () => {
    expect(wrapper.vm.films).toHaveLength(2)
  });

  xit ('should have a director', () => {
    
  })
});




// // Import app to be tested. @ is a shortcut to src folder
// import App from '@/App.vue';
// // Created own array of just two countries rather than test whole API
// import {countriesData} from './countries.js';
// // Two ways to test app as not running in browser. Mount & Shallow mount
// // Test for each component and shallow mount each one.
// // Gives back instance of component in a container
// import {shallowMount} from '@vue/test-utils';
// // Describe sets up whats being tested
// // Need to install this after teminal command for testing packages
// import fetch from 'fetch-mock';
// describe('App', () => {
// // Convention up here for scope purposes
//     let wrapper;
// // Need async below to allow data to load so testing doesn't start too soon
//   beforeEach(async () => {
//     // Converts our javascript object in countried.js to JSON
//     fetch.once('https://restcountries.eu/rest/v2/all', JSON.stringify(countriesData));
//     wrapper = shallowMount(App);
//     //  need below when using API's (except fetch.once above)
//     // Telling it what to wait for (ie data updated countries set)
//     await wrapper.vm.$nextTick();
//     // Need to clear mock test data after each async
//     fetch.reset();
//   });
//   it('should have 2 countries', () => {
//     // Need to access wrap and virtual mount to test the data.
//     // container.virtuallymounted.function.test(expected result)
//     expect(wrapper.vm.countries).toHaveLength(2);
//   });
//   it('should be able to add a favourite', () => {
// // Got a problem as this test relies on a click in the browser.
// // Need to set up the test data . Grabs first obj in dummy array
// // Arrange
//   wrapper.setData({selectedCountry: countriesData[0]});
//     // ACT
//   wrapper.vm.addToFavourites();
//   // Assess (first expect wasn't really neccasarry)
//   expect(wrapper.vm.selectedCountry.name).toMatch(countriesData[0].name);
//   expect(wrapper.vm.favouriteCountries).toHaveLength(1);
//   });
// })

