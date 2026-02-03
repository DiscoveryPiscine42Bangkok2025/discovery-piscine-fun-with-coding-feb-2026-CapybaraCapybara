if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    count=1
    for arg in "$@"; do
        if [ $count -gt 3 ]; then
            break
        fi
        echo "$arg"
        ((count++))
    done
fiu