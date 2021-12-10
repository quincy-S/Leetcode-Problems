let a = [1,1,2,3,3,3,4,5]

// THIS FUNCTION REMOVES DUPLICATE NUMBERS IN AN ARRAY of NUMBERS
function remDup(arr){
    let i = 0
    let j = 1
    while(j<=arr.length){
        if(arr[j]!==arr[i]){
            i++
            j++
        }
        else{
            arr.splice(j,1)
        }
    }
    return arr
}

var num = 1
// FUNCTION TO DETERMINE IF A NUMBER IS A PALINDROME
function pal(num){
    var rev = num.toString()
    if(Number(rev.split("").reverse().join(""))===num){
        return true
    }
    else{
        return false
    }
}

var nums = [1,3,4,5,6]
function find(arr, x){
    let left = 0
    let right = arr.length-1
    let temp
    let mid
    while(left<=right){
        mid = Math.floor((left+right)/2)
        if(arr[mid]>x){
            right=mid-1
            temp = mid
        }
        else if(arr[mid]<x){
            left=mid+1
            temp = mid+1
        }
        else{
            return mid
        }
    }
    return temp
}
