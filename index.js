// Code your solution in this file!
const getNames = function(driverObj) {
    console.log(driverObj.name)
}

function logDriverNames(drivers) {
    return drivers.forEach(getNames)
}

function logDriversByHometown(drivers, ht) {
    return drivers.forEach(function(driverObj) {
        if (driverObj.hometown === ht) {
            console.log(driverObj.name)
        }
    })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

function driversByName(drivers) {
    let nuDrivers = [...drivers]
    return nuDrivers.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    })
}

  function totalRevenue(drivers) {
    return drivers.reduce(function(agg, el) {
        return agg + el.revenue
    }, 0)
}

  function averageRevenue(drivers) {
    const a = drivers.reduce(function(agg, el, i, arr) {
        return agg + el.revenue
    }, 0)
    return a/drivers.length
}