export default function createIteratorObject(report) {
  const emps = [];
  for (const emp of Object.values(report.allEmployees)) {
    emps.push(...emp);
  }
  return emps;
}
