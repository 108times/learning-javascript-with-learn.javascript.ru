'use strict'
{
    class CoffeeMachine {
        // protected property _waterAmount
        _waterAmount = 0

        get WaterAmount() {
            return this._waterAmount
        }

        set WaterAmount( value ) {
            if ( value < 0 ) throw new Error( 'Отрицательное количество воды' )
            this._waterAmount = value
        }


        // Read-only property _power
        // in order to create read-only property one need to create getter without setter
        get power() {
            return this._power
        }

        constructor( power ) {
            this._power = power
        }
    }

// создаем
    const coffeeMachine = new CoffeeMachine( 100 )

// устанавливаем количестов воды
    setTimeout( () => coffeeMachine.waterAmount = -10 )

    console.log( `Мощность: ${ coffeeMachine.power }` )
// coffeeMachine.power = 25
}
{
    class CoffeeMachine {
        #waterAmount = 200

        #checkWater( value ) {
            if ( value < 0 ) throw new Error( 'Negative water level' )
            if ( value > this.#waterAmount ) throw new Error( 'Too much water!' )
            console.log( 'Ok!' )
        }

        get waterAmount() {
            return this.#waterAmount
        }

        set waterAmount( v ) {
            this.#checkWater( v )
            this.#waterAmount = v
        }
    }

    const machine = new CoffeeMachine( 50 )
    machine.waterAmount = 100
    console.log( machine )
    // coffeMachine.#checkWater()
    // coffeMachine.#waterLimit = 1000
}


{
    class AbstractPrivateMethods {

        makePrivateProperty( valueName, value, checkValid = () => true ) {
            let _value = value;
            let _checkValid = checkValid;

            Object.defineProperty( this, valueName, {
                    get() {
                        return _value;
                    },
                    set( newValue ) {
                        if ( !_checkValid( newValue ) ) {
                            throw new Error( "Invalid argument value." );
                        }
                        _value = newValue;
                        return newValue;
                    },
                    enumerable : true,
                    configurable : false
                }
            );
        }

        initPrivateProperties( valuesDescriptors ) {
            for ( let propertyName in valuesDescriptors ) {
                this.makePrivateProperty( propertyName,
                    valuesDescriptors[ propertyName ].value,
                    valuesDescriptors[ propertyName ].checkValid,
                )
            }
        }
    }

    class User extends AbstractPrivateMethods {
        constructor( name ) {
            super();
            this.makePrivateProperty( "name", name, ( value ) => value.length > 3 );
        }

    }

    class Manager extends AbstractPrivateMethods {
        constructor( name, surname, birthday ) {
            super();
            let isValidName = ( value ) => isNaN( +value ) && value.length > 0;
            let isValidDate = ( value ) => (Object.prototype.toString.call( value ) === "[object Date]" &&
                value.toString() !== "Invalid Date");

            this.initPrivateProperties( {
                name : { value : name, checkValid : isValidName },
                surname : { value : surname, checkValid : isValidName },
                birthday : { value : new Date( birthday ), checkValid : isValidDate },
            } );

        }
    }

    let user = new User( "John" );
    user.name = 'Amir'
    console.log( "user = ", user );

    let manager = new Manager( "John", "Smith", "01.25.1995" );
    console.log( "manager = ", manager );


}
