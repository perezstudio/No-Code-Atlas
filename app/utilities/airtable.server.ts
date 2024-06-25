// app/utils/airtable.server.ts
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

export const getToolIcons = async (view: string = 'Published Tools') => {
  const records = await base("Tools").select({ view }).all();
  return records.map(record => ({
	id: record.id,
	tool: record.get('Name') as string,
	url: record.fields.Icon[0].url as string,
  }));
};