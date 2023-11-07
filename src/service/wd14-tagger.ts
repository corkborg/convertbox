import * as ort from 'onnxruntime-web'
import zmImage from './zm.json';

export async function loadModelSession(): Promise<ort.InferenceSession> {
  ort.env.wasm.wasmPaths = '/_next/static/chunks/pages/';
  return await ort.InferenceSession.create('/wd14-tagger/model.onnx')
}

export async function predict(session: ort.InferenceSession): Promise<any[][]> {
  // @ts-ignore
  const vector: number[] = zmImage.flat().flat().flat().flat()

  const tensorA = new ort.Tensor('float32',vector, [1, 448, 448, 3]);
  const inputName = session.inputNames[0];
  const labelName = session.outputNames[0];

  const feeds: any = {}
  feeds[inputName] = tensorA;

  const csv = await fetch('/wd14-tagger/selected_tags.csv')
  const raw = await csv.text()

  const lines = raw.split("\n")
  const names = lines.map(x => {
      return x.split(',')[1]
  }).splice(1);

  const results = await session.run(feeds);
  const dataC: Float32Array = results[labelName].data as Float32Array;

  console.log("dataC:", dataC)

  const finalresult: any[][] = [];
  for(let i = 0; i <  dataC.length; i++) {
      if(dataC[i] > 0.35) {
          finalresult.push([names[i], dataC[i]]);
      }
  }
  return finalresult
}