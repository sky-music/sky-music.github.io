#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Sep 10 21:36:48 2020

@author: lagaffe
"""

import os, re


def get_html_paths(html_dir):
    '''
    Get HTML file paths to convert
    Should be all the .html files in html_dir
    '''
    html_paths = []
    for (dirpath, dirnames, filenames) in os.walk(html_dir):
        for filename in filenames:
            (basename, ext) = os.path.splitext(filename)
            if ext.lower() == '.html':
                html_paths.append(os.path.join(dirpath, filename))

    return html_paths

def get_sanitized_name(name):
    
    sanitized_name = re.sub(r'[\\/:"~`#*?<>|]', '', re.escape(name)).strip()
    sanitized_name = re.sub('(\s)+', '_', sanitized_name)  # replaces spaces by underscore
    sanitized_name = sanitized_name[:63]
    if re.search('[^_]+',sanitized_name) is None:
        return ''
    else:
        return sanitized_name


html_dir = 'movies'
index_path = '../index.md'

with open(index_path, 'r', encoding='utf-8', errors='ignore') as fp:        
    index_content = fp.read()


artist_regex = re.compile(r"<p>\s*<b>Original artist\(s\):\s*</b>([^<]+)</p>", re.I)

html_paths = get_html_paths(html_dir)

print(f"Found {len(html_paths)} HTML files in {html_dir}")

for html_path in html_paths:
    
    with open(html_path, 'r', encoding='utf-8', errors='ignore') as fp:        
        html_content = fp.read()

    artist_match = artist_regex.search(html_content)

    if artist_match:
        (dirname, old_name) = os.path.split(html_path)
        artist = get_sanitized_name(artist_match.group(1))
        if artist:
            new_name = artist + '__' + old_name
            new_path = os.path.join(dirname, new_name)
            os.rename(html_path, new_path)
            
            index_content = re.sub(old_name, new_name, index_content)
            
with open(index_path, 'w', encoding='utf-8', errors='ignore') as fp:        
    fp.write(index_content)
