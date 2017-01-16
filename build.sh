#! /bin/bash

function buildjsfile(){
  local outputName="$1"

  if [ -z "$outputName" ]; then
    echo "Error: Please provide an output name"
    exit 1
  fi

  local outputFile="./js/${outputName}.js"
  local imageDirectory="./assets/photos/${outputName}/"

  if [ -z "$imageDirectory" ]; then
    echo "Error: Please provide an image directory"
    exit 1
  fi

  for file in $(ls $imageDirectory | sort -n -t . -k 1); do
    local fullfile="${imageDirectory}${file}"

    dimensions=$(identify $fullfile | cut -d" " -f3)
    width=$(echo "$dimensions" | cut -d"x" -f1)
    height=$(echo "$dimensions" | cut -d"x" -f2)

    read -d '' js << EOF
{
  src: '$fullfile',
  w: $width,
  h: $height
},
EOF

    echo "$js" >> "$outputFile"
  done
}

buildjsfile "great-northern"
