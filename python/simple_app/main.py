import os

# function for getting envs
def get_env_vars() -> str: # return type annotation
    try:
        return os.environ['SQL_HOSTNAME']
    except ValueError as value_error: # never use bare exeptions
        return f'No ENVIRONMENT VAR provided: {value_error}' # use f-strings for vars not: "hello"+ var !
        #this is the way to work with exceptions!
        
    
# main function
def main(): 
    sql_hostname = get_env_vars() #function call
    print(sql_hostname)
    
    
if __name__ == "__main__":
    main() # call main as entry point