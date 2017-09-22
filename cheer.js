function cheer(cheer) {
  console.log("TEST");

  return  _.map(cheer, function(upper){ return (upper.toUpperCase() + " ").repeat(2) + upper.toUpperCase() + "!!!"; });
}

console.log(cheer(['foo', 'bar']));