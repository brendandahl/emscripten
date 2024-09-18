
import moduleLoader from './embind_tsgen.mjs';

const module = await moduleLoader();

// Test a few variations of passing value_objects with strings.
module.setValObj({
  bar: module.Bar.valueOne,
  string: "ABCD",
  callback: () => {}
});

module.setValObj({
  bar: module.Bar.valueOne,
  string: new Int8Array([65, 66, 67, 68]),
  callback: () => {}
});

const valObj = module.getValObj();
// TODO: remove the cast below when better definitions are generated for value
// objects.
const valString : string = valObj.string as string;

// Ensure nonnull pointers do no need a cast or nullptr check to use.
const obj = module.getNonnullPointer();
obj.delete();

console.log('ts ran');
