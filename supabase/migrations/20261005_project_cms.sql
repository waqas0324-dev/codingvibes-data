create table if not exists public.project_files (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  file_name text not null,
  language text not null default 'text',
  content text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(project_id,file_name)
);
create index if not exists project_files_project_id_idx on public.project_files(project_id);
alter table public.project_files enable row level security;
drop policy if exists "developers manage project files" on public.project_files;
drop policy if exists "public can read published project files" on public.project_files;
create policy "public can read published project files" on public.project_files for select to anon using (exists (select 1 from public.projects p where p.id=project_id and p.status='published'));
create policy "developers read project files" on public.project_files for select to authenticated using (public.is_admin());
create policy "developers insert project files" on public.project_files for insert to authenticated with check (public.is_admin());
create policy "developers update project files" on public.project_files for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "developers delete project files" on public.project_files for delete to authenticated using (public.is_admin());
grant select on public.project_files to anon,authenticated;
grant insert,update,delete on public.project_files to authenticated;
insert into storage.buckets (id,name,public) values ('project-assets','project-assets',true) on conflict (id) do update set public=true;
drop policy if exists "public read project assets" on storage.objects;
drop policy if exists "developers upload project assets" on storage.objects;
drop policy if exists "developers update project assets" on storage.objects;
drop policy if exists "developers delete project assets" on storage.objects;
create policy "public read project assets" on storage.objects for select to anon,authenticated using (bucket_id='project-assets');
create policy "developers upload project assets" on storage.objects for insert to authenticated with check (bucket_id='project-assets' and public.is_admin());
create policy "developers update project assets" on storage.objects for update to authenticated using (bucket_id='project-assets' and public.is_admin()) with check (bucket_id='project-assets' and public.is_admin());
create policy "developers delete project assets" on storage.objects for delete to authenticated using (bucket_id='project-assets' and public.is_admin());